import express from 'express'
import path from 'path'
import WebpackDevMiddleware from 'webpack-dev-middleware'
import webpack from 'webpack'

import config from '../webpack.dev.config'
import reactApp from './app'
import routes from './routes'

const app = express()

if (process.env.NODE_ENV !== 'production') {
  const compiler = webpack(config)
  app.use(WebpackDevMiddleware(compiler, {
    noInfo: true,
    reload: false,
    publicPath: config.output.publicPath,
  }))
}

app.use(routes())

app.use(reactApp)

app.listen(config.port)
console.log(`Listening at http://${config.host}:${config.port}`)
