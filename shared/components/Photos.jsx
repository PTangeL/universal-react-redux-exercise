import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Photos = ({ fetchPhotos, photos }) => (
  <div>
    <h2>Photos</h2>
    <Link to="/">
      home
    </Link> -
    <button onClick={fetchPhotos}>Randomize photos</button>
    <div>
      { photos.map(photo => <img key={photo.id} src={photo.thumbnailUrl} />) }
    </div>
  </div>
)

Photos.propTypes = {
  photos: PropTypes.array.isRequired,
  fetchPhotos: PropTypes.func.isRequired,
}

export default Photos
