/**
 * Most of the time we can set modules to 'auto'.
 * e.g. when running Jest or Sequelize which need commonjs modules.§
 * However, if we're running in webpack, then modules should be false
 * to enable webpack to optimise and tree-shake the code
 */

module.exports = (modules) => ({
  ignore: [],
  presets: ['@babel/typescript', ['@babel/env', { modules, targets: { node: '14' } }]],
});
