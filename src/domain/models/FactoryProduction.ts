import { BuildOptions, DataTypes, Model } from 'sequelize';
import sequelize from '../../db';

const { INTEGER, BIGINT } = DataTypes;

export class FactoryProduction extends Model {
  id: number;
  factoryId: number;
  production: number;
}

FactoryProduction.init(
  {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrementIdentity: true,
      autoIncrement: true,
    },
    factoryId: {
      type: BIGINT,
      references: { model: 'factories', key: 'id' },
      allowNull: false,
    },
    production: {
      type: INTEGER
    }
  },
  {
    sequelize,
    modelName: 'FactoryProduction',
    timestamps: false,
    paranoid: false,
    underscored: true,
  }
);

export type FactoryProductionModelStatic = typeof Model & {
  new (values?: Record<string, unknown>, options?: BuildOptions): FactoryProduction;
};

export default FactoryProduction as FactoryProductionModelStatic;