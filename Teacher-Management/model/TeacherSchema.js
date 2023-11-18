import mongoose from "mongoose";

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

const EmployeSchema = mongoose.model("Employee", Schema);

export default EmployeSchema;
