﻿
exports.home = function (req, res) {
    req.getConnection(function(err, connect) {
        var query = connect.query('select * from news_tbl LIMIT 6', function (err, rows) {
            if (err) {
                console.log('Error Message: %', err);
            }

            res.render('home', {
                page_title: "Express News",
                data: rows
            });
        });
    });
}

exports.news = function (req, res) {
    req.getConnection(function (err, connect) {
        var query = connect.query('select * from news_tbl', function (err, rows) {
            if (err) {
                console.log('Error Message: %', err);
            }

            res.render('news', {
                page_title: "Express News - News",
                data: rows
            });
        });
    });
}

exports.news_detail = function (req, res) {
    var id_news = req.params.id_news;
    req.getConnection(function (err, connect) {
        var query = connect.query('select * from news_tbl where id_news=?', id_news, function (err, rows) {
            if (err) {
                console.log('Error Message: %', err);
            }

            res.render('news_detail', {
                page_title: "Express News - News Detail",
                data: rows
            });
        });
    });
    //res.render('news_detail');
}

exports.about = function (req, res) {
    res.render('about');
}

exports.contact = function (req, res) {
    res.render('contact');
}

exports.gallery = function (req, res) {
    res.render('gallery');
}
