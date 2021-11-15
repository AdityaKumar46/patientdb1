const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({

    name: {
      type: String,
      required: true,
      unique: false
    },

   birthday: {
        type: Date,
        required: true,
        unique: false,
        default: Date.now
    },

    gender:
    {
        type: String,
        required: true,
        unique: false
    },

    phone: 
    {
        type: String,
        unique: false,
        sparse: true
    },

    email:
    { 
        type: String,
        require: true,
        index:true,
        unique:true,
        sparse:true
    },

    Occupation:
    {
        type: String,
        unique: false
    },
    
    proofId:
    {
        type: String,
        //required: true,
        unique: true,
        sparse:true
    },

    patientNumber:
    {
        type: Number,
        required: true,
        unique: true,
        sparse: true
    }
});

module.exports=mongoose.model('users', UserSchema);