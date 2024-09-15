import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';

describe('BodySectionWithMarginBottom component', () => {
  it('renders a BodySection component and passes props correctly', () => {
    const title = 'test title';
    const children = <p>test children node</p>;

    const wrapper = shallow(
      <BodySectionWithMarginBottom title={title}>{children}</BodySectionWithMarginBottom>
    );

    expect(wrapper.find(BodySection)).toHaveLength(1);

    expect(wrapper.find(BodySection).props().title).toEqual(title);
    expect(wrapper.find(BodySection).props().children).toEqual(children);
  });
});
