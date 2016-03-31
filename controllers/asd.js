'use strict';

var fs = require("fs");
var multiparty = require('multiparty');
//var util = require('util');

var File = require('../models/file');

var async = require('async');


module.exports = {

    index: (req, res, next) => {
        res.render('index', {title: 'Node.js test'});
    },

    loadFile: (req, res, next) => {

        var form = new multiparty.Form();

        form.parse(req);

        form.on('error', function (err) {
            console.log('error: ' + err.stack);
        });

        form.on('part', function (part) {

            fs.createWriteStream('./files/' + part.filename);

        });

        res.redirect('/');

    },

    create: (req, res, next) => {

        async.waterfall([

                callback => {

                    File.create({
                        affilateid: req.body.affilate
                    }, (err, file) => {
                        if (err) return callback(err);

                        callback(null, file);
                    });
                }

            ],
            (err) => {
                if (err) return next(err);

                res.redirect("/")
            }
        )
        ;

    }

};