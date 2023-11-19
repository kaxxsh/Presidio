import mongoose from "mongoose";


// creating an schema for the Employee 
const Employee = mongoose.Schema(
  {
    username: {
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
    salery: {
      type: Number,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const EmployeeSchema = mongoose.model("Employee", Employee);

export default EmployeeSchema;
