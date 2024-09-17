const express=require("express");
const app = express();


app.use(express.json());

require("dotenv").config();
const PORT = process.env.PORT || 4000;

const cropsroutes = require("./routes/crops");
app.use("/api/v1",cropsroutes);




app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


const dbConnect = require("./config/database");
dbConnect();

app.get("/",(req,res)=>{
  res.send(`<h1> this is home baby <h1>`);
})