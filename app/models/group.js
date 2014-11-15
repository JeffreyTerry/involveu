var mongoose = require('mongoose');

var groupSchema = mongoose.Schema({
  name: {type: String, required: true},
  purpose: {type: String, required: true},
  contact_person: {type: String, required: true},
  contact_email: {type: String, required: true}
});

exports.model = mongoose.model('group', groupSchema);




