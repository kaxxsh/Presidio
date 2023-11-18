import Express from "express";
import {
  getallEmployee,
  getEmployee,
  updateEmployee,
  deleteEmployee,
  addEmployee
} from "../controller/employeeController.js";
const Router = Express.Router();

Router.route("/").get(getallEmployee).post(addEmployee)
Router.route("/id")
  .get(getEmployee)
  .patch(updateEmployee)
  .delete(deleteEmployee);

export default Router;
