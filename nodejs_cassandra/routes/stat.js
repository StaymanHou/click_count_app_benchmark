var assert = require('assert');
var express = require('express');
var router = express.Router();
var client = require('../lib/cassandra');
var query = 'SELECT * FROM count_by_widget';

/* GET home page. */
router.get('/', function(req, res) {
  client.execute(query, function(err, result) {
    if (err) {
      res.status(503).send({msg: 'error.'});
    } else {
      res.json(result['rows']);
    }
  });
});

module.exports = router;
