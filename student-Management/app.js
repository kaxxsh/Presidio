import Express from "express";
import dbconnection from "./connection/dbConnection.js";
import {} from "dotenv/config.js";

// Create an instance of the Express application
const app = Express();
app.use(Express.json());

// Function to connect to the database and start the server
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
