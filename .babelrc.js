export default {
  "presets": ['react', 'es2015', 'stage-1'],
  "plugins": [
    "add-module-exports",
    ["babel-plugin-styled-components", {
      "ssr": true,
      "displayName": NODE_ENV !== production
    }]
  ]
}
