import {Sequelize} from 'sequelize-typescript';
import {config} from './config/config';

//console.log("DEBUG//"+config.username+"//"+config.password+"//"+config.host+"//"+config.database+"//"+config.url)
// @ts-ignore
export const sequelize = new Sequelize({
  'username': config.username,
  'password': config.password,
  'database': config.database,
  'host': config.host,
  'dialect': config.dialect,
  'storage': ':memory:',
});
