// webpack.config.js
const AutoImport = require("unplugin-auto-import/webpack")
const Components = require("unplugin-vue-components/webpack")
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers")

// const { defineConfig } = require("@vue/cli-service")
module.exports = {
  // ...
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ]
  }
}

// module.exports = defineConfig({
//   transpileDependencies: true,
// configureWebpack: {
//   plugins: [
//     require("unplugin-vue-components/webpack")({
//       /* options */
//     })
//   ]
// }
//   plugins: [
//     AutoImport({
//       resolvers: [ElementPlusResolver()]
//     }),
//     Components({
//       resolvers: [ElementPlusResolver()]
//     })
//   ]
// })
