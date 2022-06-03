const express = require("express")
const cors = require("cors")
const Routes = require("./routes")

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", value="GET,PUT,POST,DELETE")
    next();
  });
app.use(express.json());
app.use(Routes)
app.use(cors())
app.get("/teste",(req,res)=>{
    return res.json(
        "up"
    )
})

app.listen(3333,()=>{console.log("Server up in 333")})