import Express from "express";
import {
  getallEmployee,
  getEmployee,
  updateEmployee,
  deleteEmployee,
  addEmployee,
  getAverageSalaryByDepartment,
  getAverageSalaryInCompany,
} from "../controller/employeeController.js";

const Router = Express.Router();

// New routes for average salary calculations
Router.route("/average-salary/:department").get(getAverageSalaryByDepartment);
Router.route("/average-salary").get(getAverageSalaryInCompany);

// creating router for the employee module
Router.route("/").get(getallEmployee).post(addEmployee);
Router.route("/:id")
  .get(getEmployee)
  .patch(updateEmployee)
  .delete(deleteEmployee);

export default Router;
