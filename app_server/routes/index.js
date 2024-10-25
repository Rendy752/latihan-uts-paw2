var express = require('express');
var router = express.Router();
// Import Controller
const mainController = require('../controllers/pembayaran');
/* GET home page. */
router.get('/pembayaran', mainController.index);
module.exports = router;
