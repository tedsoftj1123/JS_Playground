const router = require("express").Router();

router.get('/', (req, res) => {
     console.log("유저 리스트 조회");
     res.send();
});

router.get('/:userId', (req, res) => {
     console.log("id로 user 조회: ", req.params.userId);
     res.send();
});

router.post('/', (req, res) => {
     console.log("회원가입");
     res.send();
});

router.delete('/:userId', (req, res) => {
     console.log("id로 user 삭제: ", req.params.userId);
     res.send();
});

module.exports = router;