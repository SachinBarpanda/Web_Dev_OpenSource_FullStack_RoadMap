const express = require('express');
const router = express.Router(); 
const {isLoggedIn,isProductAuthor} = require('../middleware');
const Product = require('../models/Product');
const User = require('../models/User');



// route to see the cart
router.get('/user/cart',isLoggedIn, async (req,res)=>{
    const user = await User.findById(req.user._id).populate('cart');
    const totalAmount = user.cart.reduce((sum,curr)=>sum+curr.price,0)
    const productinfo = user.cart.map((p)=>p.desc).join(',');
    res.render('cart/cart', {totalAmount,productinfo,user})
})

// actually adding the product to the cart
router.post('/user/:productId/add',isLoggedIn,async (req,res)=>{
    let {productId} = req.params;
    let userId = req.user._id;
    let product = await Product.findById(productId);
    let user = await User.findById(userId);
    user.cart.push(product);
    user.save();
    res.redirect('/user/cart');
})

//to remove the item from the cart
router.delete('/carts/:id',isLoggedIn, async (req, res) => {
    try {
        // console.log(req);
        let{id} = req.params;
        let userId = req.user._id;
        let user = await User.findById(userId);
        user.cart = user.cart.filter((obj)=>obj.id!==id);//does not work

        req.flash('success','item deleted succesfully');
        res.redirect('/user/cart');
    } catch (e) {
        res.status(500).render('error', {err:e.message});
    }
})








module.exports = router;