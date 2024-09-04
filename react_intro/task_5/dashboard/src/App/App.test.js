import React from 'react';
import { shallow } from "enzyme";
import App from "./App";

describe("<App />", () => {
  it('App render with no crash', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toEqual(true);
  });
  it('App render class App-header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div.App-header')).toHaveLength(1);
  });
  it('App render class App-body', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div.App-body')).toHaveLength(1);
  });
  it('App render class App-footer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div.App-footer')).toHaveLength(1);
  });
});
