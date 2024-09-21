import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications', () => {
  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('does not rerender with the same list', () => {
    const wrapper = shallow(<Notifications listNotifications={[{ id: 1, type: 'default', value: 'test' }]} />);
    const instance = wrapper.instance();
    const shouldUpdateSpy = jest.spyOn(instance, 'shouldComponentUpdate');
    wrapper.setProps({ listNotifications: [{ id: 1, type: 'default', value: 'test' }] });
    expect(shouldUpdateSpy).toHaveBeenCalled();
    expect(shouldUpdateSpy).toHaveLastReturnedWith(false);
  });

  it('rerenders with a longer list', () => {
    const wrapper = shallow(<Notifications listNotifications={[{ id: 1, type: 'default', value: 'test' }]} />);
    const instance = wrapper.instance();
    const shouldUpdateSpy = jest.spyOn(instance, 'shouldComponentUpdate');
    wrapper.setProps({ listNotifications: [{ id: 1, type: 'default', value: 'test' }, { id: 2, type: 'urgent', value: 'urgent test' }] });
    expect(shouldUpdateSpy).toHaveBeenCalled();
    expect(shouldUpdateSpy).toHaveLastReturnedWith(true);
  });
});
