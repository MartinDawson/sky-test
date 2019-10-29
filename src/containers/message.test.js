import { shallow } from 'enzyme';
import * as React from 'react';
import Message from './message';
import { createStore } from 'redux';
import messages from '../data/messages';
import members from '../data/members';
import { converMembersToMap } from '../reducers/members';

const membersMap = converMembersToMap(members);
const member = membersMap[messages[0].userId];

const setup = (newProps, newState) => {
  const props = Object.assign(
    {
      message: messages[0],
    },
    newProps
  );
  const store = createStore(() =>
    Object.assign(
      {
        members: membersMap,
      },
      newState
    )
  );

  const wrapper = shallow(<Message {...props} />, { context: { store } }).dive();

  return {
    wrapper,
    props,
    store,
  };
};

describe('Message', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders nothing when member does not exist', () => {
    const { wrapper } = setup(undefined, { members: [] });

    expect(wrapper.find('.message')).toHaveLength(0);
  });

  describe('when member does exist', () => {
    it('email is hidden by default', () => {
      const { wrapper } = setup();

      expect(wrapper.find('.email')).toHaveLength(0);
    });

    it('onMouseEnter shows the email', () => {
      const { wrapper } = setup();

      wrapper
        .find('.message')
        .props()
        .onMouseEnter();

      expect(wrapper.find('.email')).toHaveLength(1);
    });

    it('onMouseLeave hides the email', () => {
      const { wrapper } = setup();
      const message = wrapper.find('.message');

      message.props().onMouseEnter();
      message.props().onMouseLeave();

      expect(wrapper.find('.email')).toHaveLength(0);
    });

    it('renders avatar in img', () => {
      const { wrapper } = setup();
      const img = wrapper.find('img');

      expect(img.props().src).toBe(member.avatar);
    });

    it('renders message', () => {
      const { wrapper, props } = setup();
      const message = wrapper.find('.message');

      expect(message.text()).toContain(props.message.message);
    });

    it('renders timestamp in human readable format', () => {
      const { wrapper } = setup();
      const timestamp = wrapper.find('.timestamp');

      expect(timestamp.text()).toBe('09/02/2017');
    });
  });
});
