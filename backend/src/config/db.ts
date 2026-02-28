import mongoose from  "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI || "");
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        if (error instanceof Error) {
            console.error(`MongoDB connection error: ${error.message}`);
            if (error.stack) {
                console.error(error.stack);
            }
        } else {
            console.error("MongoDB connection error:", error);
        }
        process.exit(1);
    }
}

export default connectDB;
