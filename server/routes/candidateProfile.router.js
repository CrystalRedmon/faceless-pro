const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
// GET the 3 Latest Job Posts in the Candidate Landing Page.
router.get('/', (req, res) => {

    const sqlTxt = `SELECT "employer".company_name,"employer".company_address,"job_post".title
    FROM "job_post"
    JOIN "employer"
    ON "job_post".employer_id = "employer".id 
    ORDER BY "job_post".id DESC limit 3;`;
  
  
    pool.query(sqlTxt)  
      .then(dbRes => {
        res.send(dbRes.rows);
        console.log(dbRes.rows);
      })
      .catch(error => {
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

