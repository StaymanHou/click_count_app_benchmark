var assert = require('assert');
var express = require('express');
var router = express.Router();
var client = require('../lib/cassandra');
var query = 'UPDATE count_by_widget SET clicks = clicks + 1 WHERE widgetID=? AND time=?';

/* GET home page. */
router.get('/', function(req, res) {
  var widgetID = req.param('wid');
  var current_hour = new Date();
  current_hour.setMinutes(0);
  current_hour.setSeconds(0);
  current_hour.setMilliseconds(0);
  client.execute(query, [parseInt(widgetID), current_hour], function(err) {
    assert.ifError(err);
  });
  res.render('click', { widgetID: widgetID });
});

module.exports = router;
