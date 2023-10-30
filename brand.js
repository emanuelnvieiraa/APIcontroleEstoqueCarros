import mongoose from "mongoose";
const brandSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},

    
    model: {type: String, required: true },
    brand: {type: String},
    year: {type: Number},
   
},

    {versionKey: false}

    


);

const car = mongoose.model("brands", carSchema);
export default brand;