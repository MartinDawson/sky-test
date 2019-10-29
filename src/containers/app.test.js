import Home from './home';
import { shallow } from 'enzyme';
import App from './app';
import * as React from 'react';

const setup = newProps => {
  const props = Object.assign({}, newProps);
  const wrapper = shallow(<App {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('app', () => {
  it('renders Home', () => {
    const { wrapper } = setup();

    expect(wrapper.find(Home)).toHaveLength(1);
  });
});
