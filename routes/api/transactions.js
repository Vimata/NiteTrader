const express = require("express");
const router = express.Router();
const Transaction = require('../../models/Transaction')

router.get("/test", (req, res) => res.json({
    msg: "This is the transactions route"
}));

router.get('/fetchtrades', function(req, res){
    Transaction.find({userId: req.body.userId}, function(err, trade){
        if(err){
            console.log(err);
        } else {
            res.json(trade)
        }
    })
})

router.post('/trade', function(req, res){
    // debugger
    // console.log(req);
    let newTransaction = new Transaction({
        // userId: req.get('userId'),
        // ticker: req.get('ticker'),
        // price: parseFloat(req.get('price')),
        // shares: parseInt(req.get('shares')),
        // buy: req.get('buy') 
        userId: req.body.userId,
        ticker: req.body.ticker,
        price: parseFloat(req.body.price),
        shares: parseInt(req.body.shares),
        buy: req.body.buy 
    })
    newTransaction.save().then(newTrans => res.json(newTrans));
})

module.exports = router;
