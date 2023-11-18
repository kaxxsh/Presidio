import Express from "express";
import {
  allTeacher,
  addTeacher,
  getTeacher,
  updateTeacher,
  deleteTeacher,
} from "../controller/teacherController.js";

const Router = Express.Router();

Router.route("/").get(allTeacher).post(addTeacher);
Router.route("/:id").get(getTeacher).patch(updateTeacher).delete(deleteTeacher);

export default Router;
