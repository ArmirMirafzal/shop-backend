const express = require("express");
const cors = require("cors");
// const { mongoose } = require("mongoose");
// const { MONGO_URI } = require("dotenv");
const { authRouter } = require("./users");
const { default: mongoose } = require("mongoose");

const app = express();

app.use(express.json());
app.use(cors());

// app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);


mongoose.set("strictQuery", false)
mongoose.connect("mongodb+srv://Armir:lvtyI9t3Va24gcAh@cluster0.log24ts.mongodb.net/",{
  useNewUrlParser: true,
//   useFindAndModify: false,
  useUnifiedTopology: true, 
});

const PORT = 8000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
