import Home from './home';
import { shallow } from 'enzyme';
import * as React from 'react';
import Messages from './messages';
import { createStore, applyMiddleware } from 'redux';
import messages from '../data/messages';
import thunk from 'redux-thunk';
import { loadMembers } from '../action-creators/members';
import { loadMessages } from '../action-creators/messages';

jest.mock('../action-creators/members', () => ({
  loadMembers: jest.fn(() => () => {}),
}));

jest.mock('../action-creators/messages', () => ({
  loadMessages: jest.fn(() => () => {}),
}));

const setup = newProps => {
  const props = Object.assign({}, newProps);
  const store = createStore(
    () => ({
      messages,
    }),
    applyMiddleware(thunk)
  );

  const wrapper = shallow(<Home {...props} />, { context: { store } }).dive();

  return {
    wrapper,
    props,
    store,
  };
};

describe('Home', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders Messages', () => {
    const { wrapper } = setup();

    expect(wrapper.find(Messages)).toHaveLength(1);
  });

  it('dispatches loadMessages on mount', () => {
    setup();

    expect(loadMessages).toHaveBeenCalledTimes(1);
  });

  it('dispatches loadMembers on mount', () => {
    setup();

    expect(loadMembers).toHaveBeenCalledTimes(1);
  });

  it('passes in messages to Messages from the redux store', () => {
    const { wrapper } = setup();

    expect(wrapper.find(Messages).props().messages).toBe(messages);
  });
});
