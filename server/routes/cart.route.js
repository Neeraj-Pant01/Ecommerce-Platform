const { createCart, updateCart, getCart, deleteCart, getcart, getAllCarts } = require("../controllers/cart.controller");
const { verifyToken } = require("../middlewares/verifytoken");

const router = require("express").Router()

router.post('/',verifyToken,createCart)
router.put('/:id',verifyToken,updateCart)
router.delete('/:id',verifyToken,deleteCart)
router.get('/:userId',verifyToken,getcart)
router.get('/all/carts',verifyToken,getAllCarts)

module.exports = router;