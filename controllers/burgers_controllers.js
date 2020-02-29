const burger = require('../models/burger.js');
const express = require('express');
const router = express.Router();


router.get('/', function (req, res) {
    burger.selectAll(function (data) {
        const hbsObject = {
            burgers: data
        };
        res.render('index', hbsObject);
    });
});

router.post('/api/burgers', function (req, res) {
    burger.insertOne([
        'burger_name'
    ], [
        req.body.name
    ], function (result) {
        res.json({ id: result.insertId });
    });
});

router.put('/api/burgers/:id', function (req, res) {
    let condition = 'id = ' + req.params.id;

    console.log(`This is the condition: ${condition}`);

    burger.updateOne({
        devoured: '1'
    }, condition, function (result) {
        if (result.changedRows == 0) return res.status(404).end();
        else res.status(200).end();
    });
});

router.delete('/api/burgers/:id', function (req, res) {
    let condition = 'id = ' + req.params.id;

    burger.delete(condition, function (result) {
        if (result.affectedRows == 0) return res.status(404).end();
        else res.status(200).end();

    });
});


// Export routes for server.js to use.
module.exports = router;