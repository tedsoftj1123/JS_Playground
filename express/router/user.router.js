const router = require("express").Router();

router.get('/', (req, res) => {
     res.json(
          {
               "content": "hello world!"
          }
     ).send();
});

module.exports = router;