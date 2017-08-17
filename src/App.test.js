import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Header from './components/header';
import EconomyMainContainer from './containers/economy_main_container';

it('renders without crashing', () => {
  shallow(<App />);
});

it('renders the Header component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Header)).toHaveLength(1);
});

it('renders the EconomyMainContainer component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(EconomyMainContainer)).toHaveLength(1);
});
