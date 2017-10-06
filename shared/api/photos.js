export const fetchRandomPhotos = () => (
    fetch('http://jsonplaceholder.typicode.com/photos/')
    .then((response) => {
      if (response.status >= 400) throw new Error("Bad response from server")

      const index = Math.floor(Math.random() * 4880) + 1
      return response.json().then(response => response.slice(index, index + 10))
    })
  )
