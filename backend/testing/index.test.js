const request = require('supertest');
const index = require('../index.js');


//GET REQUESTS - ALL
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

request(index)
  .get('/category/')
  .expect('Content-Type', /json/)
  .expect(200)
  .end(function (err, res) {
    if (err) { throw err }
    else {
      console.log('Got Categories')
    }
  })

//Awaiting role definition
request(index)
  .get('/roles/')
  .expect('Content-Type', /json/)
  .expect(200)
  .end(function (err, res) {
    if (err) { throw err }
    else {
      console.log('Got Roles')
    }
  })

//GET REQUESTS - BY ID
request(index)
  .get('/items/1')
  .expect('Content-Type', /json/)
  .expect(200)
  .end(function (err, res) {
    if (err) { throw err }
    else {
      console.log('Got First Item')
    }
  })

request(index)
  .get('/category/1')
  .expect('Content-Type', /json/)
  .expect(200)
  .end(function (err, res) {
    if (err) { throw err }
    else {
      console.log('Got First Category')
    }
  })

request(index)
  .get('/user/1')
  .expect('Content-Type', /json/)
  .expect(200)
  .end(function (err, res) {
    if (err) { throw err }
    else {
      console.log('Got First User')
    }
  })

request(index)
  .get('/role/1')
  .expect('Content-Type', /json/)
  .expect(200)
  .end(function (err, res) {
    if (err) { throw err }
    else {
      console.log('Got First Role')
    }
  })

request(index)
  .get('/user/1/orders/')
  .expect('Content-Type', /json/)
  .expect(200)
  .end(function (err, res) {
    if (err) { throw err }
    else {
      console.log('Got Orders of First User')
    }
  })

request(index)
  .get('/user/1/orders/1')
  .expect('Content-Type', /json/)
  .expect(200)
  .end(function (err, res) {
    if (err) { throw err }
    else {
      console.log('Got First Order of First User')
    }
  })



//POST REQUEST - BY ID

//TESTS PASSED
// request(index)
//   .post('/items/new/')
//   .send({ product_name: "Test", category: 1, rating: 1, description: "Test description", price: 1.50, picture: "test picture", quantity: 1, nsn: "nsn", mftr: 1 })
//   .expect('Content-Type', /json/)
//   .expect(200)
//   .end(function (err, res) {
//     if (err) { throw err }
//     else {
//       console.log('Added Item')
//     }
//   })

// request(index)
//   .delete('/items/delete/20')
//   .expect('Content-Type', /json/)
//   .expect(200)
//   .end(function (err, res) {
//     if (err) { throw err }
//     else {
//       console.log('Deleted Item')
//     }
//   })



//UPDATE REQUEST - BY ID

//DELETE REQUEST - BY ID
