const {db} = require('./server/db')
const app = require('./server')
const port = process.env.PORT || 3000;

db.sync()  // sync our database
  .then(function(){
    app.listen(port) // then start listening with our express server once we have synced
  })
