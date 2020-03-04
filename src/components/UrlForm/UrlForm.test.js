import React from 'react'
import { shallow } from 'enzyme';
import { UrlForm } from './UrlForm'

describe('UrlForm', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow (<UrlForm />)
  })
  it('should be an instance of UrlForm', () => {
    expect(wrapper).toMatchSnapshot()
  })
  it('should start with default state object', () => {
    expect(wrapper.state('title')).toEqual('')
    expect(wrapper.state('urlToShorten')).toEqual('')
  })
  it('should handleNameChange of title', () => {
    const mockEvent = {target: {name: 'title', value: 'I love assessments'}};
    const expected = 'I love assessments';
    wrapper.instance().handleNameChange(mockEvent);
    expect(wrapper.state('title')).toEqual(expected);
  })
  it('should handleNameChange of urlToShorten', () => {
    const mockEvent = {target: {name: 'urlToShorten', value: 'http://www.420blazeit.pizza/'}};
    const expected = 'http://www.420blazeit.pizza/';
    wrapper.instance().handleNameChange(mockEvent);
    expect(wrapper.state('urlToShorten')).toEqual(expected);
  })
  it('should call handleSubmit on click', () => {
    wrapper.instance().handleSubmit = jest.fn();
    wrapper.find('button').simulate('click')
    expect(wrapper.instance().handleSubmit).toHaveBeenCalled();
  })
  it('should call clearInputs when handleSubmit is called', () => {
    const mockEvent = { preventDefault: jest.fn() } 
    wrapper.instance().clearInputs = jest.fn();
    wrapper.instance().handleSubmit(mockEvent)
    expect(wrapper.instance().clearInputs).toHaveBeenCalled();
  })
  it('should clear inputs when clearInputs is called', () => {
    const startState = {title: 'Best site ever', urlToShorten: 'http://www.420blazeit.pizza/'};
    wrapper.setState(startState);
    wrapper.instance().clearInputs();
    expect(wrapper.state('title')).toEqual('');
    expect(wrapper.state('urlToShorten')).toEqual('');
  })
})