// webpack.config.js
const AutoImport = require("unplugin-auto-import/webpack")
const Components = require("unplugin-vue-components/webpack")
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers")
const path = require("path")
// const { defineConfig } = require("@vue/cli-service")
module.exports = {
  outputDir: "./build",
  devServer: {
    proxy: {
      "^/api": {
        target: "http://127.0.0.1:4523/m1/2458010-0-default",
        pathRewrite: {
          "^/api": ""
        },
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    resolve: {
      //   extension: [".js", ".vue", ".mjs", ".ts", ".jsx", ".tsx", ".json"], //自动补齐文件后缀名
      alias: {
        //别名
        "@": path.resolve(__dirname, "./src")
      }
    },
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
