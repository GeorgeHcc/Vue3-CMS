module.exports = {
  // parser: "babel-eslint",
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    // "@vue/prettier",
    // "@vue/typescript/recommended",
    // "@vue/prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "@typescript-eslint/no-explicit-any": "off",
    "vue/multi-word-component-names": "off" //关闭驼峰命名组件检测
  }
}
