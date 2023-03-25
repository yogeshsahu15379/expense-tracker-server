import mongoose from 'mongoose';

const mongo_uri ="mongodb+srv://expense-tracker:NTWzVJoU6SLNaEph@cluster0.oavvwmp.mongodb.net/?retryWrites=true&w=majority"

const mongoServer = async () =>{
    try{
        await mongoose.connect(mongo_uri);

        console.log("mongo has connected")
    }catch(error){
        console.log(error);
        throw(error)
    }
}

export default mongoServer;