const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.post('/', (req, res) => {

    console.log('candidateInfo: ', req.user)
    const sqlTxt = `INSERT INTO "candidate" 
                    ("user_id", "first_name", "last_name")
                    VALUES ($1, $2, $3);`;

    const sqlParams = [
        req.user.id,
        req.body.first_name,
        req.body.last_name
    ]

    pool.query(sqlTxt, sqlParams)
        .then(result => {
            res.sendStatus(200);
            console.log('POST candidate info successful');
        })
        .catch(error => {
            res.sendStatus(500);
            console.log('POST candidate info failed: ', error);
        })

});



router.put('/:id', (req, res) => {

    console.log('Candidate14: ', req.user, req.body)
    const sqlTxt = `UPDATE "candidate"
                    SET "first_name" = $1,
                    "last_name" = $2,
                    "linkedin_link" = $3,
                    "resume_path" = $4,
                    "cover_letter_path" = $5
                    WHERE "id" = $6;`;

    const sqlParams = [
        req.body.first_name,
        req.body.last_name,
        req.body.linkedin_link,
        req.body.resume_path,
        req.body.cover_letter_path,
        req.user.id
    ]

    pool.query(sqlTxt, sqlParams)
        .then(result => {
            res.sendStatus(200);
            console.log('PUT candidate info successful');
        })
        .catch(error => {
            res.sendStatus(500);
            console.log('POST candidate info failed: ', error);
        })

});





module.exports = router;
