// webpack.config.js
const AutoImport = require("unplugin-auto-import/webpack")
const Components = require("unplugin-vue-components/webpack")
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers")
const path = require("path")
// const { defineConfig } = require("@vue/cli-service")
module.exports = {
  // output: "./build",

  configureWebpack: {
    // devServer: {
    //   proxy: {
    //     "^/api": {
    //       target: "http://152.136.185.210:5000",
    //       pathRewrite: {
    //         "^/api": ""
    //       },
    //       changeOrigin: true
    //     }
    //   }
    // },
    // resolve: {
    //   extension: [".js", ".vue", ".mjs", ".ts", ".jsx", ".tsx", ".json"], //自动补齐文件后缀名
    //   alias: {
    //     //别名
    //     "@": path.resolve(__dirname, "./src")
    //   }
    // },
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
