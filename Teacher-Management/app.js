import Express from "express";
import dbconnection from "./connection/dbConnection.js";
import {} from "dotenv/config.js";

const app = Express();
app.use(Express.json());

const connect = async () => {
  try {
    dbconnection(process.env.MONGO_URL);
    app.listen(process.env.PORT, () => console.log("listerning at 3000"));
  } catch (error) {
    console.log(error);
  }
};

connect();
