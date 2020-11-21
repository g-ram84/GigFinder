const express = require('express');

const router = express.Router();

module.exports = () => {

router.get ('api/jobs', (req,res) => {
  res.send('hello hello')
  //
})
return router
}  