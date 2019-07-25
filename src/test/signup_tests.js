import chai from "chai";
import chaiHttp from "chai-http";
import dotenv from "dotenv";
import app from "../app";

dotenv.config();

chai.use(chaiHttp);
const { expect } = chai;

// signup tests part

describe('signup', () => {
  it('should be able to signup', (done) => {
    chai.request(app)
      .post('/api/signup').send({
        firstname: 'christian',
        lastname: 'habineza',
        email: 'dalvan@gmail.com',
        password: 'ASqw12**',
        retypepassword: 'ASqw12**',
      })
      .end((err, res) => {
        expect(res.status).to.equal(201);
        expect(res.body).to.be.an("object");
        expect(res.body).to.have.property("data");
        done();
      });
  });

  it('should throw an error when email already exist', (done) => {
    chai.request(app)
      .post('/api/signup').send({
        firstname: 'christian',
        lastname: 'habineza',
        email: 'dalvan@gmail.com',
        password: 'ASqw12**',
        retypepassword: 'ASqw12**',
      })
      .end((err, res) => {
        expect(res.status).to.equal(409)
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('status');
        expect(res.body).to.have.property('message');
        done();
      });
  });

  
  it('should give an error password and confirm password do not match', (done) => {
    chai.request(app)
      .post('/api/signup').send({
        firstname: 'chris',
        lastname: 'habineza',
        email: 'habineza@gmail.com',
        password: 'ASqw12**',
        retypepassword: 'qwer',
      })
      .end((err, res) => {
        expect(res.status).to.equal(400);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('status');
        expect(res.body).to.have.property('err');
        done();
      });
  });
});
