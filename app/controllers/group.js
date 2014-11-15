var Group = require('../models/group').model;

exports.findGroups = function(res) {
  Group.find().limit(20).exec(function(err, objects) {
    if(err) {
      res.status(500).json({'err': err});
    } else {
      res.json({'groups': objects});
    }
  });
};

exports.createGroup = function(name, purpose, contact_person, contact_email, res) {
  var group = new Group({'name': name, 'purpose': purpose, 'contact_person': contact_person, 'contact_email': contact_email});
  group.save(function(err, obj) {
    if(err) {
      res.status(500).json({'err': err});
    } else {
      res.json({'group': obj});
    }
  });
};

exports.remove = function(id, res) {
  Group.findByIdAndRemove(function(err, obj) {
    if(err) {
      res.status(500).json({'err': err});
    } else {
      res.json({'group removed': obj});
    }
  });
};

