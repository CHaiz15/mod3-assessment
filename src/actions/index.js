export const setUrls = (urls) => ({
  type: 'SET_URLS',
  urls: urls,
});

export const addUrl = (url) => ({
  type: 'ADD_URL',
  url,
});

export const deleteSelectedUrl = (url) => ({
  type: 'DELETE_URL',
  url,
});
