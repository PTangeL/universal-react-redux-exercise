import React from 'react'
import { connect } from 'react-redux'

import Photos from '../components/Photos'
import * as api from '../api/photos'
import * as actions from '../actions/photos'

class PhotosContainer extends React.Component {
  constructor(props) {
    super(props)
    this.fetchPhotos = this.fetchPhotos.bind(this)
  }

  componentDidMount() {
    this.fetchPhotos()
  }

  fetchPhotos() {
    api.fetchRandomPhotos()
      .then(this.props.receivePhotos)
  }

  render() {
    return (
      <Photos fetchPhotos={this.fetchPhotos} photos={this.props.photos} />
    )
  }
}

const mapStateToProps = (state) => ({
  photos: state.photos
})

const mapDispatchToProps = {
  receivePhotos: actions.receivePhotos
}

PhotosContainer.defaultProps = {
  photos: []
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotosContainer)
