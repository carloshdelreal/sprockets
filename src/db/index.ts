import { Sequelize } from 'sequelize';
import config from './config';

if (!config.database) throw new Error('define a database name');
if (!config.username) throw new Error('define a database username');

const sequelize = new Sequelize(config.database, config.username, config.password, config);

export default sequelize;
