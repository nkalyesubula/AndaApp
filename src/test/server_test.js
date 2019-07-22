import chai from "chai";
import chatHttp from "chai-http";
import "chai/register-should";
import app from "../app";

chai.use(chatHttp);
const { expect } = chai;

describe("Testing the AndaAPP endpoints", () => {
  it("It should display a welcome message", done => {
    chai
      .request(app)
      .get("/")
      .set("Accept", "application/json")
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });
});
