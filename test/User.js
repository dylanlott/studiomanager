"use strict";

let mongoose = require('mongoose');
let User = require('../models/User');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();
let expect = chai.expect;
let request = require('superagent');

chai.use(chaiHttp);

describe('Users', ()=> {
  beforeEach((done) => {
    User.remove({}, (err) => {
      done()
    })
  })

  describe('/POST user', ()=> {
    it('It should POST user details and create a user', (done) => {
      chai.request(server)
        .post('http://localhost:8080/users')
        .send({ email:"lott.dylan@gmail.com", password:"password"})
        .end((err, res) => {
          expect(res).to.have.status(200);
        })
    })
  })

  // describe('/POST user', ()=> {
  //   it('It should POST user details and login', (done) => {
  //     var user = request.agent()
  //       .post('http://localhost:8080/users/auth')
  //       .send({email: "lott.dylan@gmail.com", password:"passowrd"})
  //   })
  // })

  // describe('/GET User', () => {
  //   it('It should GET user details', (done) => {
  //     chai.request(server)
  //       .get('/user')
  //   })
  // })
})
