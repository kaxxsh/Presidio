import Express from "express";
import {
  allMovie,
  addMovie,
  getMovie,
  updateMovie,
  deleteMovie,
} from "../controller/movieController.js";

const Router = Express.Router();

// Route: GET /, POST /
Router.route("/").get(allMovie).post(addMovie);

// Route: GET /:id, PATCH /:id, DELETE /:id
Router.route("/:id").get(getMovie).patch(updateMovie).delete(deleteMovie);

export default Router;
