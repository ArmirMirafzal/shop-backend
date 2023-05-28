const express = require("express");
const cors = require("cors");
require("dotenv").config();


const { authRouter } = require("./users");
const { mongoose } = require("mongoose");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/auth", authRouter);


mongoose.set("strictQuery", false)
mongoose.connect("mongodb+srv://Armir:lvtyI9t3Va24gcAh@cluster0.log24ts.mongodb.net/",{
  useNewUrlParser: true,
  // useFindAndModify: false,
  useUnifiedTopology: true, 
});


console.log(process.env.MONGO_URI)

const PORT = 8000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
