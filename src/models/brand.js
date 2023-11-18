import mongoose from "mongoose";
const brandSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},

    
    brandName: {type: String, required: true },
    country: {type: String, required: true },
   
},

    {versionKey: false}

    


);

const brand = mongoose.model("brands", brandSchema);
export {brand, brandSchema};