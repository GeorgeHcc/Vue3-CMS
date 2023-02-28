module.exports = {
  plugins: [
    [
      "import",
      {
        //按需引入elementplus样式
        libraryName: "element-plus",
        styleLibraryDirectory: (name) => {
          return `theme-chalk/${name}.css`
        }
      }
    ]
  ],
  presets: ["@vue/cli-plugin-babel/preset"]
}
