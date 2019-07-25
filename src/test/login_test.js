import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

chai.use(chaiHttp);
const { expect } = chai;

describe('login', () => {
    it('should be able to signup', (done) => {
        chai.request(app)
          .post('/api/signup').send({
            firstname: 'christian',
            lastname: 'habineza',
            email: 'habineza@gmail.com',
            password: 'ASqw12**',
            retypepassword: 'ASqw12**',
          })
          .end((err, res) => {
            expect(res.status).to.equal(201)
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.property('data');
            done();
          });
      });
    it('should login', (done) => {
        chai.request(app)
        .post('/api/login').send({
            email: 'habineza@gmail.com',
            password:'ASqw12**'
        })
        .end((err, res) => {
            expect(res.status).to.equal(200),
            expect(res.body).to.be.an('object'),
            expect(res.body).to.have.property('status'),
            expect(res.body).to.have.property('data'),
            done();
        });
    });
    it('should throw an error when email is incorrect', (done) => {
        chai.request(app)
        .post('/api/login').send({
            email: 'habinezzaaaa@gmail.com',
            password: 'ASqw12**'
        })
        .end((err, res) => {
            expect(res.status).to.equal(400),
            expect(res.body).to.be.an('object'),
            expect(res.body).to.have.property('status'),
            expect(res.body).to.have.property('message'),
            done();
        });
    });
    it('should throw an error when password is incorrect', (done) => {
        chai.request(app)
        .post('/api/login').send({
            email: 'habineza@gmail.com',
            password: '1234567890'
        })
        .end((err, res) => {
            expect(res.status).to.equal(400),
            expect(res.body).to.be.an('object'),
            expect(res.body).to.have.property('status'),
            expect(res.body).to.have.property('message'),
            done();
        });
    });
});