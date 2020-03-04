export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
      .then(response => response.json())
}

export const postUrl = async (url) => {
  
  const options = {
    method: 'POST',
    body: JSON.stringify({
      title: url.title,
      long_url: url.urlToShorten,
    }),
    headers: {
      'Content-Type': 'application/json'  
    }
  }

  return await fetch('http://localhost:3001/api/v1/urls', options)
    .then(res => {
      if(!res.ok) {
        throw Error('Something is not right, try again later')
      }
      return res.json()})
}

export const deleteUrl = async (url) => {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  return await fetch(`http://localhost:3001/api/v1/urls/${url.id}`, options)
    .then(res => {
      if(!res.ok) {
        throw Error('Something is not right, try again later')
      }
    })
}