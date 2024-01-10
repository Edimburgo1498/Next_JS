import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "por favor ingresa el titulo"]
    },
    plot: {
        type: String,
        required: [true, "por favor ingresa el plot"]
    }

})

export default mongoose.models.Movies || mongoose.model('Movies', MovieSchema);