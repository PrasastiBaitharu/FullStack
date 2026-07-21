const express = require("express");
const {registerController, loginController, deleteController, updateController} = require("../controllers/userController");
const router = express.Router();
//routes
//REGISTER || POST
router.post("/register" , registerController );
router.post("/login" , loginController);
router.delete("/delete" , deleteController);
router.put("/update" , updateController);

module.exports = router