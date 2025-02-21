const asyncHandler = require("express-async-handler");
const User = require("../../models/userModel");

const GetUserDetails = asyncHandler(async (req, res) => {
  const { email } = req.params; 

  if (!email) {
    return res.status(400).json({
      message: "Email is required",
      success: false,
    });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User does not exist",
        success: false,
      });
    }

    const { password, ...userInfo } = user.toObject();
    return res.status(200).json({
      message: "User details fetched successfully!",
      success: true,
      userInfo,
    });
  } catch (error) {
    console.error("Error fetching user details:", error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
});

module.exports = { GetUserDetails };
