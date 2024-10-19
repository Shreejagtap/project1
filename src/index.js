import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./env",
});

connectDB();

// first approach
// import express from "express";
// const app = express();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     console.log("Database connection successful");

//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening on port ${process.env.PORT}`);
//     });

//     app.on("error", (error) => {
//       console.log("ERROR", error);
//       throw error;
//     });
//   } catch (error) {
//     console.log("Error: ", error);
//     throw error;
//   }
// })();
