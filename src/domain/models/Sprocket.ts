import { BuildOptions, DataTypes, Model, UUID } from 'sequelize';
import sequelize from '../../db';

const { INTEGER, UUIDV4 } = DataTypes;

export class Sprocket extends Model {
  id!: string;
  teeth!: number;
  pitchDiameter!: number;
  outsideDiameter!: number;
  pitch!: number;
}

Sprocket.init(
  {
    id: {
      type: UUID,
      allowNull: false,
      defaultValue: UUIDV4,
      primaryKey: true,
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
