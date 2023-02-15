module.exports = {
  plugins: [
    [
      "import",
      {
        //按需引入elementplus样式
        libraryName: "element-plus",
        customStyleName: (name) => {
          return `element-plus/lib/theme-chalk/${name}.css`
        }
      }
    ]
  ],
  presets: ["@vue/cli-plugin-babel/preset"]
}
