module.exports = {
  presets: [['@babel/preset-env', { targets: { node: 'current' } }], '@babel/preset-typescript'],
  env: {
    test: {
      plugins: [['@babel/plugin-proposal-decorators', { legacy: true }], 'babel-plugin-transform-typescript-metadata'],
    },
  },
};
