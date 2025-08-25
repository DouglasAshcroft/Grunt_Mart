const request = require('supertest');
const index = require('../index.js');

request(index)
  .get('/items/')
  .expect('Content-Type', /json/)
  .expect(200)
  .end(function (err, res) {
    if (err) { throw err }
    else {
      console.log('Got items')
    };
  });