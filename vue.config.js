// webpack.config.js
const AutoImport = require("unplugin-auto-import/webpack")
const Components = require("unplugin-vue-components/webpack")
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers")
// const { defineConfig } = require("@vue/cli-service")
module.exports = {
  configureWebpack: {
    plugins: [
      AutoImport({
        eslintrc: {
          enabled: true // <-- this
        },
        imports: ["vue", "vue-router"],
        resolvers: [ElementPlusResolver()],
        dts: "./auto-imports.d.ts"
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ]
  }
  // lintOnSave: false
}
