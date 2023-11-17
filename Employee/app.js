import Express from "express";
import dbconnection from "./connection/dbConnection.js";
import {} from "dotenv/config.js";
import EmployeeRouter from "./router/employeeRouter.js";

const app = Express();
app.use(Express.json());
app.use("/api/v1/", EmployeeRouter);

const connect = async () => {
  try {
    dbconnection(process.env.MONGO_URL);
    app.listen(process.env.PORT, () => console.log("listerning at 3000"));
  } catch (error) {
    console.log(error);
  }
};

connect();
