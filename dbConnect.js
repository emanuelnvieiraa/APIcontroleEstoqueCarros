import mongoose from "mongoose";

async function connectDataBase(){


    mongoose
    .connect("mongodb+srv://emanuel:emanuel123@cluster0.bjuvmnv.mongodb.net/?retryWrites=true&w=majority");
    return mongoose.connection;

    //mongodb+srv://<username>:<password>@cluster0.bjuvmnv.mongodb.net/?retryWrites=true&w=majority
    
}

export default connectDataBase;