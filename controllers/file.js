'use strict';

var fs = require("fs");

var ini = require('ini');

var multiparty = require('multiparty');

var File = require('../models/file');

var async = require('async');


module.exports = {

    index: (req, res, next) => {
        res.render('index', {title: 'Node.js test'});
    },

    loadFile: (req, res, next) => {

        async.waterfall([

                callback => {

                    var form = new multiparty.Form();

                    form.parse(req, function(err, fields, files){
                        if (err) return callback(err);

                        fs.readFile(files.upload[0].path, 'UCS-2', (err, data) => {
                            if (err) return callback(err);

                            data = data.replace("Windows Registry Editor Version 5.00","");

                            callback (fields, data)

                        });


                    });

                }, (fields, data) => {

                    var config = ini.parse(data);

                    File.create({

                        affilateId: fields.affilate,
                        machineInfo: config

                    }, (err, file) => {
                        if (err) return callback(err);

                        callback(null, file);
                    });
                
            }], (err) => {
                if (err) return next(err);

                res.redirect("/")
            }
        );

    }
};