import pg from 'pg';
import { Options } from 'sequelize';
import './env';

// const connectTimeout = process.env.DB_INCREASE_TIMEOUT ? 300000 : 30000;

const config: Options = {
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.TEST === 'true' ? 'test_database' : process.env.POSTGRES_DB,
  host: process.env.POSTGRES_DB_HOST,
  dialect: 'postgres',
  dialectModule: pg,
  define: { underscored: true },
  // dialectOptions: {
  // options: { validateBulkLoadParameters: true, connectTimeout, requestTimeout: connectTimeout },
  // ssl: process.env.DB_SSL === 'true' && { ca: process.env.DB_CA_CERT },
  // },
};

if (process.env.DB_PORT) config.port = parseInt(process.env.DB_PORT, 10);

// eslint-disable-next-line no-console
if (process.env.TEST !== 'true' && process.env.DB_LOGGING === 'true') console.log(config);
else config.logging = false;

export default config;
