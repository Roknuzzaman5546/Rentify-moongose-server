// this is api rout for payments authectication
const paymentIntent = require('../../api/payments/paymentIntent');
const paymentInsert = require('../../api/payments/paymentsInsert');
const router = require('express').Router();

router.post("/create-payment-intent", paymentIntent)
router.post("/payments", paymentInsert)


module.exports = router