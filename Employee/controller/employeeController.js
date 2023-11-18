import badRequest from "../error/badRequest.js";
import Employee from "../model/employeeSchema.js";

// get all the users in company
// route: http://localhost:3000/api/v1/
const getallEmployee = async (req, res, next) => {
  try {
    const data = await Employee.find(req.query);
    if (data.length === 0) throw new badRequest("no data found");
    res.status(200).json({ data });
  } catch (error) {
    next(error);
  }
};

// Add user to the company
// route: http://localhost:3000/api/v1/
const addEmployee = async (req, res, next) => {
  try {
    console.log(req.body.username);
    if (
      !req.body.username ||
      !req.body.age ||
      !req.body.dob ||
      !req.body.salery ||
      !req.body.department
    )
      throw new badRequest("user details missing");
    const data = await Employee.create(req.body);
    res.status(200).json({ data });
  } catch (error) {
    next(error);
  }
};

// get the single user
// route: http://localhost:3000/api/v1/:id
const getEmployee = async (req, res, next) => {
  try {
    const data = await Employee.findById(req.params.id);
    if (data.length === 0) throw new badRequest("no data found");
    res.status(200).json({ data });
  } catch (error) {
    next(error);
  }
};

// update user details
// route: http://localhost:3000/api/v1/:id
const updateEmployee = async (req, res, next) => {
  try {
    const data = await Employee.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!data) throw new badRequest("Not updated");
    res.status(200).json({ data });
  } catch (error) {
    next(error);
  }
};

// delete the user for the db
// route: http://localhost:3000/api/v1/:id
const deleteEmployee = async (req, res, next) => {
  try {
    const data = await Employee.findByIdAndDelete(req.params.id);
    if (!data) throw new badRequest("Not Deleted");
    res.status(200).json({ message: "success" });
  } catch (error) {
    next(error);
  }
};

export {
  getallEmployee,
  getEmployee,
  updateEmployee,
  deleteEmployee,
  addEmployee,
};
