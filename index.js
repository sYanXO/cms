const express = require("express");
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");

const app = express();
const port = 3000;

app.use("/api/v1/user",userRouter);

app.use("/api/v1/courses",courseRouter);

app.use("/api/v1/admin",adminRouter);

app.listen(port);