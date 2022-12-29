const mongoose = require('mongoose');



mongoose.connect(process.env.DATABASE, {
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(()=>{
    console.log("DATABASE Connection Successfull");
}).catch((e)=>{
    console.log(e);
})