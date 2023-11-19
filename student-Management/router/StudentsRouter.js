import Express from "express";

const Router = Express.Router();

// Route: GET /, POST /
Router.route("/").get(allStudent).post(addStudent);

// Route: GET /:id, PATCH /:id, DELETE /:id
Router.route("/:id").get(getStudent).patch(updateStudent).delete(deleteStudent);

export default Router;
