const mongoose = require('mongoose');
require('dotenv').config(); 

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }) 
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Could not connect to MongoDB", err));

const ObjectId = mongoose.Types.ObjectId;

const userSchema = mongoose.Schema({
    email: { type: String, unique: true },
    password: String,
    firstname: String,
    lastname: String
});

const adminSchema = mongoose.Schema({
    email: { type: String, unique: true },
    password: String,
    firstname: String,
    lastname: String
});

const courseSchema = mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    imageURL: String,
    creatorId: ObjectId
});

const purchaseSchema = mongoose.Schema({
    userId: ObjectId,
    courseId: ObjectId
});

const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", adminSchema);
const courseModel = mongoose.model("course", courseSchema);
const purchaseModel = mongoose.model("purchase", purchaseSchema);

module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
};