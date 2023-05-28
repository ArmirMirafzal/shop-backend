const express = require("express");

const router = express.Router();

// ❗❗❗ bu yerda har hil methodlarga callback functionlar ham kelyapti va ushbu cb functionlari req, va res larni qabul qilyapti (req = request => so'rov, res = response => javob)
/* .redirect  methodi  bu ma'lum bor joyni slesh bilan belgilab qo'yib link berilsa ma'lum bir shart bajarilgandan keyin usha yerga o'tkazib yuborsa bo'ladi. */


router.get("/login", (req, res) => {
  res.send({  message: "👍🏻 login" });
});

router.get("/register", (req, res) => {
  res.send({ message: "👍🏻 register" });
});

router.post("/register", async (req, res) => {
  try {
    console.log(req.body);

    // const userData = {
    //   username: req.body.username,
    //   email: req.body.email,
    //   phone: req.body.phone,
    //   password: req.body.password,
    //   confirmPassword: req.body.confirmPassword,
    // };

    // const userDB = await User.create(userData);
    // console.log(userDB);

  } catch (err) {
    res.status(400).send({ data: null, message: err.message });
    console.log(JSON.parse(JSON.stringify(err)));
  }
});

module.exports = {
  authRouter: router,
};
