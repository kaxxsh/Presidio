import mongoose from "mongoose";

// creating an schema for the Teachers
const Schema = new mongoose.Schema(
  {
    studentname: {
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
    class: {
      type: Number,
      required: true,
    },
    subjects: [
      {
        subname: {
          type: String,
          required: true,
          unique: true,
        },
        mark: {
          type: Number,
          required: true,
        },
      },
    ],
    percentage: {
      type: Number,
      required: true,
    },
    grade: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const StudentSchema = mongoose.model("Students", Schema);

export default StudentSchema;
