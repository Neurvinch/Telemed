const mongoose = require('mongoose');
const validator = require('validator');

const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
   // username , email , password , confirmPassword
   
   // isVerified , otp , otpExpires

   // resetPasswordOTP , reset password OTP expires , created aT
  

   //  hash the password before saving the plain r=text password
  
   // this is a file where we do the schema for our db savunsg
      
    username: { }
})