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
// request(index)
//   .get('/items/1')
//   .expect('Content-Type', /json/)
//   .expect(200)
//   .end(function (err, res){
//     if (err) {throw err}
//     else{
//       console.log('Got First Item')
//     }
//   })

//   request(index)
//   .get('/category/1')
//   .expect('Content-Type', /json/)
//   .expect(200)
//   .end(function (err, res){
//     if (err) {throw err}
//     else{
//       console.log('Got First Category')
//     }
//   })

//   request(index)
//   .get('/user/1')
//   .expect('Content-Type', /json/)
//   .expect(200)
//   .end(function (err, res){
//     if (err) {throw err}
//     else{
//       console.log('Got First User')
//     }
//   })

//   request(index)
//   .get('/role/1')
//   .expect('Content-Type', /json/)
//   .expect(200)
//   .end(function (err, res){
//     if (err) {throw err}
//     else{
//       console.log('Got First Role')
//     }
//   })

//   request(index)
//   .get('/user/1/orders/')
//   .expect('Content-Type', /json/)
//   .expect(200)
//   .end(function (err, res){
//     if (err) {throw err}
//     else{
//       console.log('Got Orders of First User')
//     }
//   })

//   request(index)
//   .get('/user/1/orders/1')
//   .expect('Content-Type', /json/)
//   .expect(200)
//   .end(function (err, res){
//     if (err) {throw err}
//     else{
//       console.log('Got First Order of First User')
//     }
//   })



//POST REQUEST - BY ID
// request(index)
//   .get('/items/1')
//   .expect('Content-Type', /json/)
//   .expect(200)
//   .end(function (err, res) {
//     if (err) { throw err }
//     else {
//       console.log('Got First Item')
//     }
//   })
//UPDATE REQUEST - BY ID

//DELETE REQUEST - BY ID
