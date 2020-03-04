export const urlsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_URLS':
      return action.urls;
    case 'ADD_URL':
        return [...state, action.url];
    case 'DELETE_URL':
        const filteredUrls = state.filter(url => url.id !== action.url.id)
        return filteredUrls;
    default:
      return state;
  }
};
