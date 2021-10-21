const express = require("express");
const router = express.Router();
const SignupTemplate = require("../models/user");

//get product
router.get("/", (req, res) => {
    SignupTemplate.find()
    .then((signuptemplate) => res.json(signuptemplate))
    .catch((err) => res.status(400).json(`Error:${err}`));
});

//post product
router.post("/add", (req, res) => {
  const newUser = new SignupTemplate({
    fullName: req.body.fullName,
    userName: req.body.userName,
    email: req.body.email,
    password:req.body.password,
    phone:req.body.phone,
  });

  newUser
    .save()
    .then(() => res.json("New User Added"))
    .catch((err) => res.status(400).json(`Error${err}`));
});

//find product by id
router.get("/:id", (req, res) => {
    SignupTemplate.findById(req.params.id)
    .then((signuptemplate) => res.json(signuptemplate))
    .catch((err) => res.status(400).json(`Error${err}`));
});

//find product by id and update

router.put("/update:id", (req, res) => {
    SignupTemplate.findById(req.params.id)
    .then((signuptemplate) => {
      signuptemplate.fullName = req.body.fullName;
      signuptemplate.userName = req.body.userName;
      signuptemplate.email = req.body.email;
      signuptemplate.password=req.body.password;
      signuptemplate.phone=req.body.phone;

      signuptemplate
        .save()
        .then(() => res.json("User Details Update Successfuly"))
        .catch((err) => res.status(400).json(`Error${err}`));
    })
    .catch((err) => res.status(400).json(`Error${err}`));
});

//find product by id and delete
router.delete("/:id", (req, res) => {
    SignupTemplate.findByIdAndDelete(req.params.id)
    .then(() => res.json("Product Deleted"))
    .catch((err) => res.status(400).json(`Error${err}`));
});

module.exports = router;
