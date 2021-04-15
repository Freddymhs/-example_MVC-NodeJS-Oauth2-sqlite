import Sequelize from 'sequelize';
import db from '../libs/db.js';

/* general configure */
const modelUser = db.define('modelUser', {
  name: Sequelize.STRING,
  lastname: Sequelize.STRING,
  email: Sequelize.STRING,
  token: Sequelize.STRING,

});

/* gerate schema database in sql */
modelUser.sync({ force: true }).then(() => modelUser.create({
  name: 'freddy',
  lastname: 'huaylla',
  email: 'fmarcosdev@gmail.com',
  token: 'tokensecreto007',
})).catch((err) => {
  console.log('ERROR schema on create user sample');
  console.log(err);
});

export default modelUser;
