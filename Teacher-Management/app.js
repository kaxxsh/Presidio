import Express from "express";
import dbconnection from "./connection/dbConnection.js";
import {} from "dotenv/config.js";
import Teacher from "./router/teacherRouter.js";
import errorhandle from "./middleware/errror-handle.js";

const app = Express();
app.use(Express.json());
app.use("/api/v1", Teacher);
app.use(errorhandle);

const connect = async () => {
  try {
    dbconnection(process.env.MONGO_URL);
    app.listen(process.env.PORT, () =>
      console.log(`listerning at ${process.env.PORT}`)
    );
  } catch (error) {
    console.log(error);
  }
};

connect();
