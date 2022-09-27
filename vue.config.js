// const target = 'http://43.201.18.146'
// const target = 'http://localhost:8080'

module.exports = {
  devServer: {
    proxy: 'http://localhost:8080'
  }
}

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
