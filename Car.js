import mongoose from "mongoose";
const carSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},

    
    model: {type: String, required: true },
    brand: {type: String},
    year: {type: Number},
   
},

    {versionKey: false}

    


);

const car = mongoose.model("cars", carSchema);
export default car;