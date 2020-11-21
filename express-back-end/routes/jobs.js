const express = require('express');

const router = express.Router();

module.exports = () => {

router.get ('api/jobs', (req,res) => {
  console.log("jobs jobs")
  res.send('hello hello')
  //
})
return router
}  