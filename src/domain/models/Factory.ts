import { BuildOptions, DataTypes, Model, STRING } from 'sequelize';
import sequelize from '../../db';

const { INTEGER } = DataTypes;

export class Factory extends Model {
  id!: number;
  name: string;
}

Factory.init(
  {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrementIdentity: true,
      autoIncrement: true,
    },
    name: {
      type: STRING
    }
  },
  {
    sequelize,
    modelName: 'Factory',
    timestamps: false,
    paranoid: true,
    underscored: true,
  }
);

export type FactoryModelStatic = typeof Model & {
  new (values?: Record<string, unknown>, options?: BuildOptions): Factory;
};

export default Factory as FactoryModelStatic;