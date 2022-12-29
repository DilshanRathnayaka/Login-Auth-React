const router = require("express").Router();
const Users = require("../Models/User");
const bcryptjs = require("bcryptjs");



//REGISTER
router.post('/register', async (req, res)=>{
    try {
        // Get body or Data
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;

        const createUser = new Users({
            username : username,
            email : email,
            password : password
        });

        const created = await createUser.save();
        res.status(200).send("User Registered Success");

    } catch (err) {
        res.status(400).send(err)
    }
})

//LOGIN
router.post("/login",async(req,res)=>{
    try{
        const email = req.body.email;
        const password = req.body.password;

        const user = await Users.findOne({email:email});
        if(user){
            const isMatch = await bcryptjs.compare(password,user.password);

            if(isMatch){
                const token = await user.generateToken();
                res.cookie("jwt",token,{
                    expires :new Date(Date.now()+86400000),
                    httpOnly:true
                })
                res.status(200).json("User Logged in");
            }else{
                res.status(400).json("Invalid Credentials");
            }
        }
    }catch(err){
        res.status(400).json(err);
    }
})
//LOG OUT
router.get('/logout',(req,res)=>{
    res.clearCookie("jwt",{path:'/'})
    res.status(200).json("User LogOut")
})

router.post("/",async(req,res)=>{
    try{
        const email = req.body.email;
       
        const user = await Users.findOne({email:email})
        if(user){
            res.status(200).json(user)
        }
    }catch(err){
        res.status(400).json(err)
    }
})

   

module.exports = router;