import webpack from 'webpack'
import base from './webpack.base'

base.host = 'localhost'
base.port = 3456

base.devtool = 'source-map'
base.plugins = base.plugins.concat([
  new webpack.NoErrorsPlugin(),
])

export default base
