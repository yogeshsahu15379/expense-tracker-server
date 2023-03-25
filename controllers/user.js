import user from "../models/users.js";

export const getAllUsers = async (req,res) =>{
    
    try{
         const getUser= await user.find({});
         res.status(200).json(getUser);
    }catch(error){
        console.log("user not found",error)
        res.status(500).json({massage: "server error"})
    }


}

