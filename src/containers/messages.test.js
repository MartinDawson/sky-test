import { shallow } from 'enzyme';
import * as React from 'react';
import Messages from './messages';
import Message from './message';
import messages from '../data/messages';

const setup = newProps => {
  const props = Object.assign(
    {
      messages,
    },
    newProps
  );

  const wrapper = shallow(<Messages {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('Messages', () => {
  it('renders a Message for each message', () => {
    const { wrapper } = setup();

    expect(wrapper.find(Message)).toHaveLength(messages.length);
  });
});
