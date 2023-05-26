const express = require("express");
// const { object, string, } = require("yup");
// const { generateUsers } = require("./generate-users");
const { faker } = require("@faker-js/faker");
// const User = require("./model.js")

const router = express.Router();
// const users = generateUsers();
/* 👋  */
// /* ❌❌❌  dangerously models */
// const { model } = require('mongoose');
// const { object, string, } = require("yup");

// const userSchema = object({
// 	username: string().required().trim(),
// 	email: string().email().required(),
// 	password: string().required(),
// });

// const User = model("User", userSchema);
// User.create()
// // User.create
// // module.export = { User };

/* models */
const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: false },
  password: { type: String, required: true },
  confirmPassword: { type: String, required: true },
});

const User = model("User", userSchema);
User.create;
module.export = { User };

// const schema = object({
//   username: string().required().trim(),
//   email: string().email().required(),
// //   phoneNumber: string().min(5).required(),
//   password: string().min(4).max(10).required(),
// });

// ❗❗❗ bu yerda har hil methodlarga callback functionlar ham kelyapti va ushbu cb functionlari req, va res larni qabul qilyapti (req = request => so'rov, res = response => javob)
/* .redirect  methodi  bu ma'lum bor joyni slesh bilan belgilab qo'yib link berilsa ma'lum bir shart bajarilgandan keyin usha yerga o'tkazib yuborsa bo'ladi. */
/* 👋 👋  */

router.get("/login", (req, res) => {
  res.send({  message: "👍🏻 login" });
});

router.get("/register", (req, res) => {
  res.send({ message: "👍🏻 register" });
});

// router.post("/login", (req, res) => {
// });

router.post("/register", async (req, res) => {
  try {
    /* 👋  */
    console.log(req.body);

    const userData = {
      username: req.body.username,
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword,
    };

    const userDB = await User.create(userData);
    console.log(userDB);
    /* 👋👋  */

    // if (!req.body.username) return res.status(400).send({ data: null, message: "Username is required field" });

    // const user = { ...req.body, id: faker.string.uuid() };
    // users.push(user);
    // res.send({ data: user, message: "created user" });
  } catch (err) {
    res.status(400).send({ data: null, message: err.message });
    console.log(JSON.parse(JSON.stringify(err)));
  }
});

module.exports = {
  authRouter: router,
};
