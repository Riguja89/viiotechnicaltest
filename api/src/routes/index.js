const { Router } = require('express');
const userSignup = require("./user/signup");
const userSignin = require("./user/signin");
const productsAll = require("./product/product");

const router = Router();

// router.get('/',async(req, res, next)=>{
//   res.send('soy la raiz root')
    
// })

router.use("/user", userSignup);
router.use("/user", userSignin);
router.use("/product", productsAll);

module.exports = router;