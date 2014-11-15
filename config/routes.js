var _ = require('underscore'),
    group = require('../app/controllers/group');

// Stores a dictionary with route paths as keys and their corresponding static html files as values.
var URLToFileMap = {
  '/': 'home/home'
};

// Renders the proper web page for all static pages by parsing the route from the req object.
var renderStaticPage = function(req, res){
  res.render(URLToFileMap[req.route.path], {
      title: 'InvolveU'
  });
};

module.exports = function(app){
/* Client Routes */
  // All static pages
  _.each(URLToFileMap, function(value, key){
    app.get(key, renderStaticPage);
  });

  app.get('/groups', function(req, res) {
    group.findGroups(req.body, res);
  });

  app.post('/groups/new', function(req, res) {
    group.createGroup(req.body.name, req.body.purpose, req.body.contact_person, req.body.contact_email, res);
  });

  app.get('/events', function(req, res) {
  });

  app.post('/events/new', function(req, res) {
    group.createGroup(req.body.name, req.body.time, req.body.duration, req.body.location, req.body.group_id, res);
  });
};
