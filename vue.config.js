const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  //  构建时的输出目录
  outputDir: "dist",
  //  放置静态资源的目录
  assetsDir: "static",
  devServer: {
    proxy: {
      '/v3': {
        target: 'https://restapi.amap.com',
        changeOrigin: true
      }
    }
  }
})
