import * as actions from '../actions';

describe('actions', () => {
  it('should have a type of SET_URLS', () => {
        const urls = {
          title: 'roflcopter',
          urlToShorten: 'https://images.unsplash.com/photo-1470114716159-e389f8712fda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80'
        }
        
        const expectedAction = {
          type: 'SET_URLS',
          urls,
        };
    
        const result = actions.setUrls(urls);
    
        expect(result).toEqual(expectedAction);
  });
});