const router = require("express").Router();
const message = require("../Models/message")


//save message
router.post("/",async(req,res)=>{
    const messages = new message(req.body);
    try{
        const saved = await messages.save();
        res.status(200).json(saved);
    }catch(err){
        res.status(500).json(err)
    }
})

// get app messages
router.get("/",async(req,res)=>{
    try{
        const messages = await message.find();
        res.status(200).json(messages);
    }catch(err){
        res.status(500).json(err)
    }
})

//get spec message using email
router.post("/email",async(req,res)=>{
    try{
        const email = req.body.email;
        const find = await message.findOne({email:email})
        if(find){
            res.status(200).json(find)
        }
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router;