const router = require("express").Router();
const User = require("./../models/User.js");
let Users = require("./../models/User.js");

router.route("/add").post((req, res) => {
  const userName = req.body.userName;
  const fullname = req.body.fullname;
  const password = req.body.password;
  const email = req.body.email;
  const address = req.body.address;
  const contact = req.body.contact;

  const newUser = new Users({
    userName,
    fullname,
    password,
    email,
    address,
    contact
  });

  newUser.save()
    .then(() => {
      req.session.user = {
        userName: userName,
        fullname: fullname,
        email: email
      };
      res.json('User added successfully');
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: 'Error adding user' });
    });
});

router.route("/get/:userName").get(async (req, res) => {
  let username = req.params.userName;

  if (req.session && req.session.user && req.session.user.userName === username) {
    console.log("Session Details ",req.session);
    res.status(200).json({ status: "User fetched", user: req.session.user });
    return;
  }

  try {
    const user = await Users.findOne({ userName: username });
    if (!user) {
      res.status(404).json({ status: "User not found" });
    } else {
      res.status(200).json({ status: "User fetched", user: user });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ status: "Error with get user", error: err.message });
  }
});

module.exports = router;