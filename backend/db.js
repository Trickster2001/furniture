const mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017/TrickNote?directConnection=true"
// mongodb://localhost:27017/

const connectToMongo = async()=>{
  mongoose.connect(mongoURI, (console.log("Connected successfully"))
  )
}

module.exports = connectToMongo;