import Express from "express";
import {
  getallEmployee,
  getEmployee,
  updateEmployee,
  deleteEmployee,
} from "../controller/employeeController.js";
const Router = Express.Router();

Router.route("/").get(getallEmployee);
Router.route("/id")
  .get(getEmployee)
  .patch(updateEmployee)
  .delete(deleteEmployee);

export default Router;
