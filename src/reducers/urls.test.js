import { urlsReducer } from '../reducers/urls.js';

describe('urls', () => {

it('should return the initial state if there is no state provided', () => {
  const expected = []
  const result = urlsReducer(undefined, [])
  expect(result).toEqual(expected)
})

it('should return the correct state if type is SET_URLS', () => {
  const urls = {
    title: 'roflcopter',
    urlToShorten: 'https://images.unsplash.com/photo-1470114716159-e389f8712fda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80'
  }

  const mockState = [];

  const mockAction = {
    type: 'SET_URLS',
    urls,
  }

  const result = urlsReducer(mockState, mockAction)

  const expected = {
    title: 'roflcopter',
    urlToShorten: 'https://images.unsplash.com/photo-1470114716159-e389f8712fda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80'
  }

  expect(result).toEqual(expected)
})
})
