process.env.NODE_ENV = 'test'

import chai, { should } from 'chai'
import chaiHttp from 'chai-http'
import server from '../src/index'

chai.use(chaiHttp)
describe('routes:index', () => {
  it('should return Hello World in JSON', (done) => {
    chai.request(server).get('/').end((err, res) => {
      should().not.exist(err)
      res.status.should.equal(200);
      res.type.should.equal('application/json')
      res.body.message.should.equal('Hello World')
      done()
    })
  })
})