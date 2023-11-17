import mongoose from "mongoose";

const dbconnection = (URL) => {
  try {
    mongoose.connect(URL);
  } catch (error) {
    console.log(error);
  }
};

export default dbconnection;
