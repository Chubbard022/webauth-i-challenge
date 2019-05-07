const router = require("express").Router();

router.get("/logout",(req,res)=>{
    if(req.session){
        req.session.destroy(err=>{
            if(err){
                res.status(400).json({errorMessage: "logout unsuccessful"})
            }else{
                res.status(200).json({successMessage :"Successful logout"})
            }
        })
    }else{
        req.status(500).json({errorMessage: "you are already logged out"})
    }
})

module.exports = router;