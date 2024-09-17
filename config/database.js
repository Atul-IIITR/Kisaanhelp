const mongoose  = require("mongoose");

require("dotenv").config();


const dbConnect = () =>{
    mongoose.connect(process.env.DATATBASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      .then(() => console.log('MongoDB connected'))
      .catch((error) => {
        console.log('MongoDB connection error:')
        console.error(error.message);
        process.exit(1);
    
});    
}
module.exports=dbConnect;