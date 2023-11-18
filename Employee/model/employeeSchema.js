import mongoose from "mongoose";

const Employee = mongoose.Schema(
  {
    username: {
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
    salery: {
      type: Number,
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
