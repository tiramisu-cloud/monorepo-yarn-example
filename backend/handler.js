const serverlessExpress = require('@vendia/serverless-express')
const app = require('./app.js')

module.exports = {
  default: serverlessExpress({
    app,
  })
}