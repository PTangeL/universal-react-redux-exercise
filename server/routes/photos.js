import * as api from '../../shared/api/photos'

export default function (router) {

  router.get('/photos', (req, res, next) => {
    api.fetchRandomPhotos().then((photos) => {
      /**
       * Initializing the Redux store with photos so they are rendered in the server-side
       */
      res.storeInitialState = { photos }

      next()
    })
  })

  return router
}
