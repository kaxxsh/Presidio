import mongoose from "mongoose";

const Employee = mongoose.Schema({
  Name: {
    type: String,
    require: true,
    unique: true,
  },
  age: {
    type: String,
    require: true,
    unique: true,
  },
  dob: {
    type: String,
    require: true,
    unique: true,
  },
  salery: {
    type: String,
    require: true,
    unique: true,
  },
  department: {
    type: String,
    require: true,
    unique: true,
  },
});

const EmployeeSchema = mongoose.model("Employee", Employee);

export default EmployeeSchema;
