var express = require('express');
var router = express.Router();
const pembayaranController = require('../controllers/pembayaran');

router.get('/', pembayaranController.index);
router.post('/insert', pembayaranController.insert);

module.exports = router;
