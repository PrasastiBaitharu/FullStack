const userModel = require("../model/userModel");

const bcrypt = require("bcrypt");

//Register
const registerController = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      res.status(201).send({
        success: "false",
        message: "All field are compulsory",
      });
    }
    //existinguser
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.send({
        success: "false",
        message: "User already exist",
      });
    }

    //newuser 
    // const newUser = new userModel({username,email,password})
    // const newUser = new userModel({username:username , email:email , password:password});
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new userModel({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(200).send({
      success: "true",
      message: "user register successfully",
      data: newUser,
    });
  } catch (error) {
    res.status(404).send({
      success: "false",
      message: "register API failed",
      error
    });
  }
};

//Login
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(201).send({
        success: "false",
        message: "All fields are compulsory",
      });
    }

    const user = await userModel.findOne({ email });
    // console.log(user.password);
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(201).send({
        success: "false",
        message: "Incorrect password",
      });
    }
    if (!user) {
      res.status(201).send({
        success: "false",
        message: "User not found",
      });
    } else {
      res.status(200).send({
        success: "true",
        message: "Login successfully",
        email,
      });
    }
  } catch (error) {
    res.status(404).send({
      success: "false",
      message: "Login API failed",
      error,
    });
  }
};

//Deleting user
const deleteController = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      req.send({
        success: "false",
        message: "All fields are compulsory",
      });
    }

    //existing user
    const existingUser = await userModel.findOne({ email });
    if (!existingUser) {
      res.send({
        success: "false",
        message: "User not found",
      });
    } else {
      const user = await userModel.deleteOne({ email });
      res.send({
        success: "true",
        message: "User deleted successfully",
      });
    }
  } catch (error) {
    console.log(`Delete API failed ${error}`)
  }
};

//Updating user
const updateController = async(req,res)=>{
  try {
    const{email,username} = req.body;
    if(!email || !username){
      res.send({
        success: "False",
        Message : "All fields are compulsory"
       })
    }

    //existing user
    const existingUser = await userModel.findOne({email});
    if(!existingUser){
      res.send({
        success : "False",
        message : "User not found"
      })
    }else{
      const updateUser = await userModel.updateOne({email},{username});
      res.send({
        success : "True",
        message : "User updated successfully"
      })
    }

  } catch (error) {
    console.log(`Update API failed ${error}`);
  }
}

module.exports = { registerController, loginController, deleteController, updateController };
