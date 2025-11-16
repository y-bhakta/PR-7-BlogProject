import Blogs from "../models/blogmodel.js";
import fs from 'fs';
import User from "../models/usermodel.js";
const blogctl={
    addblogPage(req,res){
        return res.render('./pages/addBlog.ejs');
    },
    async addblog(req,res){
        try {          
            req.body.image=req.file.path;
            await Blogs.create(req.body);
            console.log("Blog added successfully.");
            return res.redirect('/my-blogs');
        } catch (error) {
            console.log(error);
            return res.redirect('/my-blogs');
        }
    },
    async myblogPage(req,res){
        try {
            const {id}=res.locals.user
            let data = await Blogs.find({userID:id});
            return res.render('./pages/myblogs.ejs',{data});
        } catch (error) {
            console.log(error);
            return res.render('./pages/myblogs.ejs',{data:[]});
        }
    },
    async deleteblog(req,res){
        try {
            const {id}=req.params;
            let data= await Blogs.findByIdAndDelete(id);
            fs.unlinkSync(data.image);
            console.log("Blog deleted successfully.");
            return res.redirect('/my-blogs');
        } catch (error) {
            console.log(error);
            return res.redirect('/my-blogs');            
        }
    },
    async editblogPage(req,res){
        try {
            const {id}=req.params;
            let data=await Blogs.findById(id);
            return res.render('./pages/editblog.ejs',{data});
        } catch (error) {
            console.log(error);
            return res.redirect('/my-blogs');
        }
    },
    async editblog(req,res){
        try {
            const id = req.params.id;
            const existingBlog = await Blogs.findById(id);

            if(req.file){
                fs.unlinkSync(existingBlog.image);
                req.body.image = req.file.path
            }else{
                req.body.image = existingBlog.image;
            }

            let blogupdate= await Blogs.findByIdAndUpdate(id , req.body,{new:true});
            return res.redirect('/my-blogs'); 
        } catch (error) {
            console.log(error.message);
            return res.redirect('/my-blogs'); 
        }
    },
    async viewblogPage(req,res){
        try {
            let blogs = await Blogs.find({});
            let allusers=await User.find({});          
            return res.render('./pages/getallblogs',{
                blogs,
                allusers
            });
        } catch (error) {
            console.log(error.message);
            return res.render('./pages/getallblogs',{
                blogs : []
            });
        }
    }
}
export default blogctl;