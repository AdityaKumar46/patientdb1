const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const User = require('../models/User');


/**router.get('/fetchalldata', async (req, res) => {

  try {

      const user = await User.findOne(req.body.param);
      res.json(user);

  } catch (error) {
      console.error(error.message);
      res.status(500).send("ERROR OCCURED!!!!")
  }
})*/


router.get('/patient', async(req, res) => {
  const patients = await User.find({});
  res.json(patients);
})

router.post('/createuser',
  [
    body('email').isEmail(),
    body('phone').isLength({ min: 10 })
  ],
  async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try{
      const { name, birthday, gender, phone, occupation, email, proofId, patientNumber } = req.body;

        let data1=await User.findOne({proofId: req.body.proofId});
        if(data1)
        {
          return res.status(400).json({error: "Sorry proofId already exist!!"})
        }
        data1=await User.findOne({email: req.body.email});
        if(data1)
        {
          return res.status(400).json({error: "Sorry email Id already exist!!"})
        }

          data1 = new User({
          name, birthday, gender, phone, occupation, email, proofId, patientNumber
      })
      const savedData = await data1.save()

      res.json(savedData);
      console.log(savedData)


  } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  
  },
);


module.exports = router