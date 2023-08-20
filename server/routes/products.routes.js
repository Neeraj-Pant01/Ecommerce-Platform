const router = require("express").Router();
const { createProduct, updateProduct, deleteProduct, getAproduct, getAllProducts } = require("../controllers/products.controller");
const {verifyToken} = require("../middlewares/verifytoken")

router.post('/',verifyToken,createProduct)
router.put('/:productId',verifyToken, updateProduct)
router.delete('/:productId',verifyToken, deleteProduct)
router.get('/:productId', getAproduct)
router.get('/all/products',getAllProducts)

module.exports = router;