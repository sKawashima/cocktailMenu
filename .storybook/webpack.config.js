const path = require('path')
const rootPath = path.resolve(__dirname, '../')

module.exports = ({
  config
}) => {
  config.resolve.alias['@'] = rootPath
  config.resolve.alias['~'] = rootPath

  config.module.rules.push({
    test: /\.s?css$/,
    loaders: [
      'style-loader',
      'css-loader',
      'sass-loader',
    ]
  })

  config.module.rules.push({
    test: /\.sass$/,
    loaders: [
      'style-loader',
      'css-loader',
      {
        loader: 'sass-loader',
        options: {
          indentedSyntax: true
        }
      },
    ],
  })

  config.module.rules.push({
    test: /\.pug$/,
    loaders: 'pug-plain-loader'
  })

  config.module.rules.push({
    test: /\.vue$/,
    loader: 'storybook-addon-vue-info/loader',
    enforce: 'post'
  })


  return config
}
