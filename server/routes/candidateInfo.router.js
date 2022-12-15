const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.post('/', (req, res)=>{
    console.log('candidateInfo: ', req.user)
    const sqlTxt = `INSERT INTO "candidate" 
                    ("user_id", "first_name", "last_name")
                    VALUES (14, 'firstName2', 'lastName2');`;

    const sqlParams = [
        req.user.id,
        req.body.first_name,
        req.body.last_name
    ]

    pool.query(sqlTxt, sqlParams)
    .then(result=>{
        res.sendStatus(200);
        console.log('POST candidate info successful');
    })
    .catch(error=>{
        res.sendStatus(500);
        console.log('POST candidate info failed: ', error);
    })


})






module.exports = router;