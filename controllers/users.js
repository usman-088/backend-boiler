var Users = require('../models/form')

exports.signupUsers = async (req, res) => {

    try {

        if(req?.body?.email){
            let checkEmail = await Users.findOne({
                email:req?.body?.email
            })
            if(checkEmail){
                throw new Error('this email already exist')
            }
        }
        let data = new Users(req.body)
        data = await data.save()
        res.json({ data, success: true, newUser: true })

    }
    catch (err) {
        res.json({ message: err.message, success: false })
    }

}



exports.loginUsers= async(req,res)=>{
        try{
            const data = await Users.findOne({email:req.body.email,passsword:req.body.password}).exec()
            res.json({data,success:true})
            // console.log(data)
            
        }catch(err){
            // console.log(req.body) npm install bcrypt
            res.json({message:err.message,success:false})
        }
}


