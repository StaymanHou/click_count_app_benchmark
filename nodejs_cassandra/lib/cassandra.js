var cassandra = require('cassandra-driver');

var options = {
  contactPoints: ['127.0.0.1'],
  keyspace: 'counter_1',
  queryOptions: {
    prepare: true
  }
}

var client = new cassandra.Client(options);
client.connect(function(err, result) {});

module.exports = client
