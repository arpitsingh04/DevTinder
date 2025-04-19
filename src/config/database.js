const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://jainwinangry:jainwinangry@cluster0.pbzcnrd.mongodb.net/devTinder"
  );
};

module.exports = connectDB;

