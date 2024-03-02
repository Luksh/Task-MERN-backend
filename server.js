const express = require("express");
const { errorHandler } = require("./Middleware/errorMiddleware");
const connectDB = require("./Connect/database");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/tasks", require("./Routes/taskRoutes"));
app.use("/api/users", require("./Routes/userRoutes"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
