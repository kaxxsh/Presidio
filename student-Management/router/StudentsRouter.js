import mongoose from "mongoose";

// creating an schema for the Teachers
const Schema = new mongoose.Schema(
  {
    studentname: {
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
    class: {
      type: Number,
      require: true,
    },
    subjects: [
      {
        subname: {
          type: String,
          require: true,
          unique: true,
        },
        mark: {
          type: Number,
          require: true,
        },
      },
    ],
    percentage: {
      type: Number,
      require: true,
    },
    grade: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const StudentSchema = mongoose.model("Students", Schema);

export default StudentSchema;
