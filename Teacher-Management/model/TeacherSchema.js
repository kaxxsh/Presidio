import mongoose from "mongoose";

// creating an schema for the Teachers
const Schema = new mongoose.Schema(
  {
    teachername: {
      type: String,
      require: true,
      unique: true,
    },
    age: {
      type: Number,
      require: true,
    },
    dob: {
      type: String,
      require: true,
    },
    numberofclass: {
      type: Number,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const teacherSchema = mongoose.model("Teacher", Schema);

export default teacherSchema;
