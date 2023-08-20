const router = require("express").Router();
const { update, deleteUser, getAllUser, getAuser, getUserStats } = require("../controllers/users.controller");
const {verifyToken, } = require("../middlewares/verifytoken")

router.put('/:id',verifyToken,update)
router.delete('/:id',verifyToken, deleteUser)
router.get('/all',verifyToken, getAllUser)
router.get('/:id',verifyToken, getAuser)
router.get('/yearly/stats',verifyToken,getUserStats)


module.exports = router;