import Express from "express";
import dbconnection from "./connection/dbConnection.js";
import {} from "dotenv/config.js";
import EmployeeRouter from "./router/employeeRouter.js";
import CustomError from "./middleware/error-handler.js";

const app = Express();
app.use(Express.json());
app.use("/api/v1", EmployeeRouter);
app.use(CustomError);

const connect = async () => {
  try {
    dbconnection(process.env.MONGO_URL);
    app.listen(process.env.PORT, () => console.log(`listerning at ${process.env.PORT}`));
  } catch (error) {
    console.log(error);
  }
};

connect();
