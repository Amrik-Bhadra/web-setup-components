const asyncHandler = require("express-async-handler");
const User = require("../../models/userModel");
const bcrypt = require("bcrypt");

//Create
const CreateUser = asyncHandler(async (req, res) => {
  const { name, email, password, phone, avatar } = req.body;

  // Check for existing user (if needed)
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: 'User with this email already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    phone,
    avatar,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      avatar: user.avatar,
    });
  } else {
    res.status(400).json({ message: 'Invalid user data' });
  }
});


//Read
const GetUserDetails = asyncHandler(async (req, res) => {
  const { email } = req.params;
  try {
    if (!email) {
      return res.status(400).json({
        message: "All fields are mandatory",
        success: false,
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        message: "User Does Not Exist",
        success: false,
      });
    }
    return res.status(200).json({
      message: "User Details Fetched Successfully!",
      success: true,
      userInfo: user,
    });
  } catch (error) {
    res.status(501).json({
      message: "User Details Fetching Failed",
      success: false,
    });
  }
});

// Update
const UpdateUser = asyncHandler(async (req, res) => {
  const { email } = req.params;
  const { name, phone, new_email } = req.body;
  try {
    if (!email || !name || !phone || !new_email) {
      return res.status(400).json({
        message: "All fields are mandatory",
      })
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        message: "User Does Not Exist",
      })
    }
    user.name = name;
    user.phone = phone;
    user.email = new_email;
    await user.save();
    return res.status(200).json({
      message: "User Updated Successfully!",
      success: true,
    })
  } catch {
    return res.status(400).json({
      message: "All fields are mandatory",
    })
  }
})

// Delete
const DeleteUser = asyncHandler(async (req, res) => {
  const { email } = req.params;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        message: "User Does Not Exist",
      });
    }

    // Delete user by query
    await User.findOneAndDelete({ email });
    return res.status(200).json({
      message: "User Deleted Successfully!",
    })
  } catch (error) {
    console.error("Error deleting user:", error);
    return res.status(400).json({
      message: "Error deleting user",
    })
  }
})

// module.exports = { GetUserDetails };
module.exports = { GetUserDetails, CreateUser, UpdateUser, DeleteUser };
