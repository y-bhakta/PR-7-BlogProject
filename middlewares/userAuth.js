import User from "../models/usermodel.js";

const userAuth=async (req,res,next)=>{
    let {ID}=req.cookies;   
    let user=await User.findById(ID);
    if(user){
        res.locals.user=user;
        next();
    }else{
        return res.redirect('/login');
    }
}
export default userAuth;