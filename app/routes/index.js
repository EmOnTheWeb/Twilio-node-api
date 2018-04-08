const bindingRoutes = require('./binding_routes');
module.exports = function(app, db) {
  bindingRoutes(app, db);
  // Other route groups could go here, in the future
};