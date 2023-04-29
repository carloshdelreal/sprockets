import { ServerRoute } from '@hapi/hapi';
import * as Joi from '@hapi/joi';
import { getSprocketsHandler, getSprocketHandler, createSprocketHandler, updateSprocketHandler } from '../handlers';

const participantRoutes: ServerRoute[] = [
  {
    method: 'GET',
    path: '/sprockets',
    options: {
      description: 'Gets sprockets',
      auth: false,
      handler: getSprocketsHandler,
    },
  },
  {
    method: 'GET',
    path: '/sprocket/{sprocketId}',
    options: {
      description: 'Gets sprocket by its id',
      auth: false,
      handler: getSprocketHandler,
    },
  },
  {
    method: 'POST',
    path: '/sprocket',
    options: {
      description: 'Creates a new sprocket',
      auth: false,
      handler: createSprocketHandler,
      validate: {
        payload: Joi.object({
          teeth: Joi.number().required(),
          pitchDiameter: Joi.number().required(),
          outsideDiameter: Joi.number().required(),
          pitch: Joi.number().required(),
        }),
      },
    },
  },
  {
    method: 'PUT',
    path: '/sprocket/{sprocketId}',
    options: {
      description: 'Creates a new sprocket',
      auth: false,
      handler: updateSprocketHandler,
      validate: {
        payload: Joi.object({
          teeth: Joi.number().required(),
          pitchDiameter: Joi.number().required(),
          outsideDiameter: Joi.number().required(),
          pitch: Joi.number().required(),
        }),
      },
    },
  },
];

export default participantRoutes;
