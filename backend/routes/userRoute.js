const express = require("express");
const { body } = require("express-validator");
const userController = require("../controller/userController.js");

const router = express.Router();


// User Registration Route with Validation
router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),
    body("fullname.firstname").isLength({ min: 3 }).withMessage("First name must be at least 3 characters long"),
  ],
  userController.registerUser
);


// login router with validation
router.post("/login", [
  body("email").isEmail().withMessage("Invalid Email"),
  body("password").isLength({min:6}).withMessage("Password must be at least 6 characters long")
], 
  userController.loginUser
)

module.exports = router;
