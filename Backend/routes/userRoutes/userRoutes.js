const express = require("express");
const {
  GetUserDetails,
  CreateUser,
  UpdateUser,
  DeleteUser,
} = require("../../controllers/userControllers/UserCRUD");
const router = express.Router();

// USER DETAILS FETCHING
router.get("/:email", GetUserDetails);
router.post("/register",CreateUser);
router.put("/:email", UpdateUser);
router.delete("/:email", DeleteUser);


module.exports = router;
