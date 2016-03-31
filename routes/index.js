var express = require('express');
var router = express.Router();

var FileController = require('../controllers/file');

router.get ('/', FileController.index);
//router.post('/', FileController.create);
router.post('/', FileController.loadFile);
module.exports = router;

