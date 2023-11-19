import mongoose from "mongoose";

// creating an schema for the Teachers
const Schema = new mongoose.Schema(
  {
    teachername: {
      type: String,
      required: true,
      unique: true,
    },
    age: {
      type: Number,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
    numberofclass: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const teacherSchema = mongoose.model("Teacher", Schema);

export default teacherSchema;
