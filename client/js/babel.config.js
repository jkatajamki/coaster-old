module.exports = function(api) {
  api.cache(true)
  return {
    presets: [
      ['@babel/preset-env', {
        loose: true,
        modules: false
      }],
      '@babel/preset-react'
    ],
    plugins: [
      'react-hot-loader/babel'
    ]
  }
}
