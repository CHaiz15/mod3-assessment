import { setUrls } from '../../actions';
import { mapStateToProps, mapDispatchToProps } from './UrlContainer';

describe('UrlContainer', () => {
  describe('MapStateToProps', () => {
    it('should return an array of short urls', () => {
        const mockState = { urls: [
          {
            id: 1,
            long_url: 'https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
            short_url: 'http://localhost:3001/useshorturl/1',
            title: 'Awesome photo'
          },
          {
            long_url: 'https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
            title: 'I think she is workin',
            id: 2,
            short_url: 'http://localhost:3001/useshorturl/3'
          }
        ]
      }
        const expected = { urls: [
          {
            id: 1,
            long_url: 'https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
            short_url: 'http://localhost:3001/useshorturl/1',
            title: 'Awesome photo'
          },
          {
            long_url: 'https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
            title: 'I think she is workin',
            id: 2,
            short_url: 'http://localhost:3001/useshorturl/3'
          }
        ]
      }
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected)
    })
  })
  describe('MapDispatchToProps', () => {
    it('should call setUrls action', () => {
      const mockUrls = {
        title: 'roflcopter',
        urlToShorten: 'https://images.unsplash.com/photo-1470114716159-e389f8712fda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80'
      }

      const mockDispatch = jest.fn()
      const actionToDispatch = setUrls(mockUrls)

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.setUrls(mockUrls)

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    })
  })
})