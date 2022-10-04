const target = 'http://43.201.18.146'

module.exports = {
  devServer: {
    proxy: {
      '/products': {
        target,
        changeOrigin: true
      },
      '/categories': {
        target,
        changeOrigin: true
      }
    }
  }
}
