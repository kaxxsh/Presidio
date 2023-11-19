import Express from "express";
import {
  allTeacher,
  addTeacher,
  getTeacher,
  updateTeacher,
  deleteTeacher,
} from "../controller/teacherController.js";

const Router = Express.Router();

// Route: GET /, POST /
Router.route("/").get(allTeacher).post(addTeacher);

// Route: GET /:id, PATCH /:id, DELETE /:id
Router.route("/:id").get(getTeacher).patch(updateTeacher).delete(deleteTeacher);

export default Router;
