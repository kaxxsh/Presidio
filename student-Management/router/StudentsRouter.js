import Express from "express";
import {
  allStudent,
  addStudent,
  getStudent,
  updateStudent,
  deleteStudent,
  getAveragepercentageclass,
  getAveragemarkofstudent,
} from "../controller/studentController.js";
const Router = Express.Router();

// New routes for average of class calculations
Router.route("/average-class/:class").get(getAveragepercentageclass);
Router.route("/average-student/:name").get(getAveragemarkofstudent);

// Route: GET /, POST /
Router.route("/").get(allStudent).post(addStudent);

// Route: GET /:id, PATCH /:id, DELETE /:id
Router.route("/:id").get(getStudent).patch(updateStudent).delete(deleteStudent);

export default Router;
