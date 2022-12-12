const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {

  const sqlTxt = ` SELECT "employer".company_name, "job_post".title, "job_post".description
                  FROM "job_post"
                  JOIN "employer"
                  ON "job_post".employer_id = "employer".id
                  JOIN "user"
                  ON "employer".user_id = "user".id
                  WHERE "user".id = 2;`;



    pool.query(sqlTxt)
    .then(dbRes=>{
        res.send(dbRes.rows);
        console.log(dbRes.rows);
    })
    .catch(error=>{
        res.sendStatus(500);
        console.log('GET positions failed: ', error);
    })
});






/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;