'use strict';

/**
 * Mongoose ODM
 *
 * @type {*|exports|module.exports}
 */
const mongoose = require('mongoose');

var FileSchema = new mongoose.Schema({
    affilateId : {type: String},
    machineInfo: mongoose.Schema.Types.Mixed
});

var File = mongoose.model('file', FileSchema);
module.exports = File;