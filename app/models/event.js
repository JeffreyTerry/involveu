var mongoose = require('mongoose');

var eventSchema = mongoose.Schema({
  name: {type: String, required: true},
  time: {type: Date, required: true},
  duration: {type: Number, required: true},
  location: {type: String, required: true},
  group_id: {type: mongoose.Schema.Types.ObjectId}
});

exports.model = mongoose.model('event', eventSchema);




