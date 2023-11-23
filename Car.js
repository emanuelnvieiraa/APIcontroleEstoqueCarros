import mongoose from "mongoose";
const carSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},

    
    model: {type: String, required: true },
    brand: {type: String},
    year: {type: Number},
    color: {type: String}, // Adicionado campo de cor
},

    {versionKey: false}

    


);

const car = mongoose.model("cars", carSchema);
export default car;