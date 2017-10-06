import React from 'react'
import Photos from '../components/Photos'
import * as api from '../api/photos'

class PhotosContainer extends React.Component {
  constructor(props) {
    super(props)
    this.fetchPhotos = this.fetchPhotos.bind(this)

    this.state = { photos: [] }
  }

  componentDidMount() {
    this.fetchPhotos()
  }

  fetchPhotos() {
    api.fetchRandomPhotos()
      .then( photos => {
        this.setState({ photos })
      })
  }

  render() {
    return (
      <Photos fetchPhotos={this.fetchPhotos} photos={this.state.photos} />
    )
  }
}

export default PhotosContainer
