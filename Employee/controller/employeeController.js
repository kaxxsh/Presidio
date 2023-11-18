import Employee from "../model/employeeSchema.js";

const getallEmployee = async (req, res) => {
  try {
    const data = await Employee.find(req.query);
    res.status(200).json({ data });
  } catch (error) {
    console.log(error);
  }
};
const getEmployee = async (req, res) => {
  try {
    console.log(req.params.id);
    const data = await Employee.findById(req.params.id);
    res.status(200).json({ data });
  } catch (error) {
    res.sent(error);
  }
};
const updateEmployee = async (req, res) => {
  try {
    const data = await Employee.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({ data });
  } catch (error) {
    console.log(error);
  }
};
const deleteEmployee = async (req, res) => {
  try {
    const data = await Employee.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "success" });
  } catch (error) {
    res.sent(error);
  }
};
const addEmployee = async (req, res) => {
  try {
    const data = await Employee.create(req.body);
    res.status(200).json({ data });
  } catch (error) {
    console.log(error);
  }
};

export {
  getallEmployee,
  getEmployee,
  updateEmployee,
  deleteEmployee,
  addEmployee,
};
