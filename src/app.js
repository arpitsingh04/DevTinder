const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/users");
const app = express();
const port = 3000;

app.post('/signup',async (req,res)=>{
  // creating a new instance of user model
  const user = new User({
    firestNmae:"win",
    lastNmae:"jain",
    grnder:"male",
    emailId:"win@gmail.com",
    password:"win123456"
  })

  try {
      await user.save();

  res.send("user created");
  } catch (error) {
    res.status(400).send("error saving user data"+error.message);
  }

})



connectDB().then(()=>{
  try {
      console.log("connected to database");
      app.listen(port, () => {
        console.log(`server is running on port ${port}`);
      });
  } catch (error) {
      console.log('databse is not connected'+error);
  }
})


