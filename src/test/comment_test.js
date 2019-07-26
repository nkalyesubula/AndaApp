import chai from "chai";
import chaiHttp from "chai-http";
import dotenv from "dotenv";
import app from "../app";

dotenv.config();

chai.use(chaiHttp);
const { expect } = chai;

describe("comment on blog", () => {
  // should pass with right data provided
  it("should be able to comment on blog", done => {
    chai
      .request(app)
      .post("/api/comments")
      .send({
        user_id: 1,
        blog_id: 2,
        content: "Nice work"
      })
      .end((err, res) => {
        expect(res.status).to.equal(201);
        expect(res.body).to.be.an("object");
        expect(res.body).to.have.property("data");
        done();
      });
  });
  // should fail with empty body
  it("should fail with empty body", done => {
    chai
      .request(app)
      .post("/api/comments")
      .send()
      .end((err, res) => {
        expect(res.status).to.equal(400);
        expect(res.body).to.be.an("object");
        expect(res.body).to.have.property("error");
        done();
      });
  });
});
