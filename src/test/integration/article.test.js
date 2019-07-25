import chai from "chai";
import chaiHttp from "chai-http";
import dotenv from "dotenv";
import app from "../../app";

dotenv.config();

chai.use(chaiHttp);
const { expect } = chai;
chai.should();

describe("Article", () => {
  it("should be able to create article", done => {
    chai
      .request(app)
      .post("/api/article")
      .send({
        title: "IVN",
        categoryId: 4,
        body: "<p>Hello world</p>",
        userId: 3
      })
      .end((err, res) => {
        expect(res.status).to.equal(201);
        expect(res.body).to.be.an("object");
        expect(res.body).to.have.property("data");
        done();
      });
  });

  it("should throw a 400 bad request error if db violations occur", done => {
    chai
      .request(app)
      .post("/api/article")
      .send({
        title: "IVN",
        categoryId: 50, //added a non existing category
        body: "<p>Hello world</p>",
        summary: "<p>Hello</p>",
        userId: 3
      })
      .end((err, res) => {
        expect(res.status).to.equal(400);
        done();
      });
  });
});
