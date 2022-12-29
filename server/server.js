const dotenv = require("dotenv");
const express = require("express");
const cookieParser = require("cookie-parser");
const UserRoute = require("./Routes/User")
const authenticate =require("./Midd/Auth")
const Message = require("./Routes/message")
const mongoose =require ("mongoose")
dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());
app.use("/api/user",UserRoute);
app.use("/api/message",Message);
app.get('/auth', authenticate, (req, res)=>{})


mongoose.connect(process.env.DATABASE, {
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(()=>{
    console.log("DATABASE Connection Successfull");
}).catch((err)=>{
    console.log(err);
})

app.listen(process.env.PORT,()=>{
    console.log("Server Running on Port 5000")
})

