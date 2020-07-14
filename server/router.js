const express = require('express');
const router = express.Router();
const token = require('../slackapi/slackAuth');

router.post('/', (req, res) => { 
  let test = req.body; 
  // implement your bot here ... 
  console.log("Request from POST slack: ", test)
  res.send("POST Hey I am from node server which my master mayank created. lolzzz");
});

router.get('/gprep/slackcode', async (req, res) => {  
  if(req.query.code) {
    let authToken = await token.getToken(req.query.code);
    if(authToken.ok) {
      console.log(authToken);
      res.send("Successfully stored");
    } else {
      res.send(authToken.error);
    }
  } 
});

module.exports = router;