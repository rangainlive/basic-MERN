const { response } = require("express");
const express = require("express");
const signUpTemplateCopy = require("../models/SignUpModels");

const router = express.Router();

router.post("/signup", (req, res, nex) => {
  const signedUpUser = new signUpTemplateCopy({
    fullName: req.body.fullName,
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
  });
  signedUpUser
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/signin", (req, res, next) => {
  res.send("User in Sign in");
});

module.exports = router;
