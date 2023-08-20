const { createOrder, updateOrder, deleteOrder, getAorder, getAllOrders, getIncome } = require("../controllers/orders.controller");
const { verifyToken } = require("../middlewares/verifytoken");

const router = require("express").Router()

router.post('/',verifyToken,createOrder)
router.put('/:id',verifyToken,updateOrder)
router.delete('/:id',verifyToken,deleteOrder)
router.get('/:userId',verifyToken,getAorder)
router.get('/',verifyToken,getAllOrders)
router.get('/sales/income',verifyToken,getIncome)


module.exports = router;