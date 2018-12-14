const users = require('./users/users.service.js');
const classes = require('./classes/classes.service.js');
const assignments = require('./assignments/assignments.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(classes);
  app.configure(assignments);
};
