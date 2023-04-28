import { BuildOptions, DataTypes, Model } from 'sequelize';
import sequelize from '../../db';

const { INTEGER } = DataTypes;

export class Sprocket extends Model {
  id!: number;
  teeth!: number;
  pitchDiameter!: number;
  outsideDiameter!: number;
  pitch!: number;
}

Sprocket.init(
  {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrementIdentity: true,
      autoIncrement: true,
    },
    teeth: {
      type: INTEGER,
      allowNull: false,
    },
    pitchDiameter: {
      type: INTEGER,
      allowNull: false,
    },
    outsideDiameter: {
      type: INTEGER,
      allowNull: false,
    },
    pitch: {
      type: INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Sprocket',
    timestamps: false,
    paranoid: true,
    underscored: true,
  }
);

export type SprocketModelStatic = typeof Model & {
  new (values?: Record<string, unknown>, options?: BuildOptions): Sprocket;
};

export default Sprocket as SprocketModelStatic;
