import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    image: {
        type: String,
        required: true,
        trim: true,
    }
}, {timestamps: true})

// in Next.js we need to check if model exists on server cache and delete it in order to replace it with current:
if (mongoose.models && mongoose.models.blogs) {
    const blogModel = mongoose.models.blogs
    mongoose.deleteModel(blogModel.modelName)
}

const Blog = mongoose.model("blogs", blogSchema)
export default Blog