import Express from "express";
import dbconnection from "./connection/dbConnection.js";
import {} from "dotenv/config.js";
import Teacher from "./router/teacherRouter.js";

const app = Express();
app.use(Express.json());

const connect = async () => {
  try {
    dbconnection(process.env.MONGO_URL);
    app.listen(process.env.PORT, () => console.log(`listerning at ${process.env.PORT}`));
  } catch (error) {
    console.log(error);
  }
};

connect();
