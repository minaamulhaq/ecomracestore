import mongoose, { Document, Model, Schema } from "mongoose";
export interface IProduct extends Document {
    name: string
    slug: string
    category: mongoose.Types.ObjectId
    mrp: number
    sellingPrice: number
    discountPercentage: number
    media: mongoose.Types.ObjectId[]
    description?: string
    deletedAt?: Date | null
    createdAt: Date
    updatedAt: Date
}
const productSchema: Schema<IProduct> = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    slug: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    },
    mrp: {
        type: Number,
        required: true,
    },
    sellingPrice: {
        type: Number,
        required: true,
    },
    discountPercentage: {
        type: Number,
        required: true,
    },
    media: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Media",
            required: true,
        }
    ],
    description: {
        type: String,

    },
    deletedAt: {
        type: Date,
        default: null,
        index: true,
    },
}, { timestamps: true });
productSchema.index({ category: 1 });
const ProductModel: Model<IProduct> = mongoose.models.Product || mongoose.model("Product", productSchema);
export default ProductModel;