import chai from 'chai';
import chatHttp from 'chai-http';
import 'chai/register-should';
import app from '../app';

chai.use(chatHttp);
const { expect } = chai;
describe('Testing the book endpoints:', () => {
    it('It should get all blogs', (done) => {
        chai.request(app)
          .get('/api/blogs')
          .set('Accept', 'application/json')
          .end((err, res) => {
            expect(res.status).to.equal(200);
            done();
          });
      });
});