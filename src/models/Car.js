import mongoose from "mongoose";
const carSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    model: { type: String, required: true },
    brand: { type: String, required: true },
    year: { type: Number, required: true },

},

    { versionKey: false }




);
const car = mongoose.model("cars", carSchema);
export default car;