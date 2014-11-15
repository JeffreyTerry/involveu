var Event = require('../models/event').model;

exports.findEvents = function(res) {
  Event.find({}, function(err, objects) {
    if(err) {
      res.status(500).json({'err': err});
    } else {
      res.json({'events': objects});
    }
  });
};

exports.createEvent = function(name, time, duration, location, res) {
  var event = new Event({'name': name, 'time': time, 'duration': duration, 'location': location});
  event.save(function(err, obj) {
    if(err) {
      res.status(500).json({'err': err});
    } else {
      res.json({'event': obj});
    }
  });
};

exports.remove = function(id, res) {
  Event.findByIdAndRemove(function(err, obj) {
    if(err) {
      res.status(500).json({'err': err});
    } else {
      res.json({'event removed': obj});
    }
  });
};

