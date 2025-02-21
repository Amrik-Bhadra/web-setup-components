const User = require("../../../models/userModel");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");

const register = asyncHandler(async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password,
    contactNumber,
    age,
    gender,
    city,
    state,
    selectedCountry,
    zipcode,
    street,
    landmark,
  } = req.body;
  try {
    // if (!firstName || !lastName || !email || !password) {
    //   return res.status(400).json({
    //     message: "All fields are mandatory",
    //     success: false,
    //   });
    // }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User Already Exists With Given EmailID.",
        success: false,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      contactNumber,
      age,
      gender,
      city,
      state,
      selectedCountry,
      zipcode,
      street,
      landmark,
    });

    await newUser.save();

    return res.status(201).json({
      message: "User Successfully Created.",
      success: true,
    });
  } catch (error) {
    console.error("Register error:", error);
    res.status(500).json({
      message: "Register Failed",
      success: false,
    });
  }
});

module.exports = { register };
