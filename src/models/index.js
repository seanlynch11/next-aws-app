// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Cell } = initSchema(schema);

export {
  Cell
};