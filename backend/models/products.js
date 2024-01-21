import mongoose from "mongoose";


const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    supplier: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true
    },
    imageUrl: {
        type: String,
        require: true
    }
    , description: {
        type: String,
        require: true
    }
    , product_location: {
        type: String,
        require: true
    }

}, { timestamps: true })

const Product = mongoose.model("product", ProductSchema);

export default Product