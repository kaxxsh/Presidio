import mongoose from "mongoose";

const Employee = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      unique: true,
    },
    age: {
      type: String,
      require: true,
    },
    dob: {
      type: String,
      require: true,
    },
    salery: {
      type: String,
      require: true,
    },
    department: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const EmployeeSchema = mongoose.model("Employee", Employee);

export default EmployeeSchema;
