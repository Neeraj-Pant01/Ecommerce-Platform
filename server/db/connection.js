const mongoose = require("mongoose")

const connection = async () =>{
    try{
      await mongoose.connect(`${process.env.LOCALDB_URI}`,{useNewUrlParser:true,useUnifiedTopology:true})
      console.log("database is connected sucessfully !")
    }catch(err){
        console.log(err)
    }
}

module.exports = connection;