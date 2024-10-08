// Import necessary modules and the component
import React from 'react';
import { mount } from 'enzyme'; // Assuming you're using Enzyme for testing
import WithLogging from './WithLogging';

// Mock console.log function
const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();

describe('WithLogging HOC', () => {
  // First test: Console.log called on mount and unmount with Component for pure HTML
  it('should call console.log on mount and unmount with Component when wrapped element is pure HTML', () => {
    // Create a mock component wrapped with WithLogging
    const MockComponent = () => <div>Hello World</div>;
    const WrappedComponent = WithLogging(MockComponent);

    // Mount the wrapped component
    const wrapper = mount(<WrappedComponent />);

    // Expect console.log to be called with mount message
    expect(consoleLogSpy).toHaveBeenCalledWith('Component MockComponent is mounted');

    // Unmount the component
    wrapper.unmount();

    // Expect console.log to be called with unmount message
    expect(consoleLogSpy).toHaveBeenCalledWith('Component MockComponent is going to unmount');
  });

  // Second test: Console.log called on mount and unmount with component name for Login component
  it('should call console.log on mount and unmount with the name of the component when wrapped element is the Login component', () => {
    // Create a mock Login component wrapped with WithLogging
    const Login = () => <div>Login Component</div>;
    const WrappedLogin = WithLogging(Login);

    // Mount the wrapped Login component
    const wrapper = mount(<WrappedLogin />);

    // Expect console.log to be called with mount message containing component name
    expect(consoleLogSpy).toHaveBeenCalledWith('Component Login is mounted');

    // Unmount the Login component
    wrapper.unmount();

    // Expect console.log to be called with unmount message containing component name
    expect(consoleLogSpy).toHaveBeenCalledWith('Component Login is going to unmount');
  });
});

// Restore console.log function after tests are executed
afterAll(() => {
  consoleLogSpy.mockRestore();
});
