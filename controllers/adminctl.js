import User from "../models/usermodel.js";
import bcrypt from "bcrypt";
import cookie from "cookie-parser";

const adminctl={
    dashboard(req,res){
        res.render('./index.ejs');
    },
    signupPage(req,res){
        res.render('./pages/signup.ejs');
    },
    async signup(req,res){
        let {password,confirmPassword}=req.body;
        if(password!==confirmPassword){
            console.log("Passwords do not match.");            
            return res.redirect('/signup');
        }
        try {
            let data= await User.create(req.body);
            console.log(`${data.name} account created.`);            
            return res.redirect('/login');
        } catch (error) {
            console.log(error);            
        }
    },
    loginPage(req,res){
        res.render('./pages/login.ejs');
    },
    async login(req,res){
        try {
          let {email,password}=req.body;
          let user= await User.findOne({email,isActive:true});           
          if(user){
            let isMatch= await bcrypt.compare(password,user.password);
            if(isMatch){
                console.log("Login successful.");   
                res.cookie('ID',user._id);             
                return res.redirect('/');
            }else{
                console.log("Incorrect password.");                
                return  res.redirect('/login');
            }
          }else{
            console.log("User not found. OR User is deactivated.");            
            return res.redirect('/login');
          }
        } catch (error) {
            console.log(error);
            return res.redirect('/login');
        }
    },
    logout(req,res){
        res.clearCookie('ID');
        return res.redirect('/login');
    },
    async getallusersPage(req,res){
        try{
            let users=await User.find({});
            return res.render('./pages/tables.ejs',{
                users
            });
        }catch(err){
            console.log(err);
            return res.redirect('/');
        }
    },
    async deactive(req,res){
        try {
            let {id}=req.params;
            let oneuser=await User.findById(id);         
            if(oneuser.isActive){
                oneuser.isActive=false;
            }else{
                oneuser.isActive=true;
            }
            await oneuser.save();
            return res.redirect('/getallusers');
        } catch (error) {
            console.log(error);
            return res.redirect('/getallusers');
        }
    },
    async active(req,res){
        try {
            let {id}=req.params;
            let oneuser=await User.findById(id);
            if(oneuser.isActive){
                oneuser.isActive=false;
            }else{
                oneuser.isActive=true;
            }
            await oneuser.save();
            return res.redirect('/getallusers');
        } catch (error) {
            console.log(error);
            return res.redirect('/getallusers');
        }
    }
};
export default adminctl;