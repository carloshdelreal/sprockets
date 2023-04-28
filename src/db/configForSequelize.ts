import config from './config';

/**
 * This file is needed for importing config in the sequelize cli (which needs an ES5 style commonjs module.exports).
 * The file is process with Babel, but Babel does not provide a `module.exports` line.
 * See: https://stackoverflow.com/questions/33505992/babel-6-changes-how-it-exports-default
 * In addition, we can't put the module.exports directly in config.js because the application will throw an error when running.
 * However, this `configForSequelize` file is not imported by the app code, hence it is not bundled by Webpack.
 */

// Overrides sequelize migration history table name (the default 'SequelizeMeta' changed in db migrations from mssql to postgres)
config.migrationStorageTableName = 'sequelizemeta';
config.seederStorageTableName = 'sequelize_data';

module.exports = config;
