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


 

 // GET to the jobs details page in the Candidate Landing Page.
 router.get('/:id', (req, res) => {

    const sqlTxt = `SELECT "employer".company_name,"employer".logo_path,"job_post".title,"job_post".description
    FROM "job_post"
    JOIN "employer"
        on "employer".id = "job_post".employer_id
    WHERE "job_post".id = $1;`;
  
    pool.query(sqlTxt, [req.params.id])
      .then(dbRes => {
        res.send(dbRes.rows);
        console.log(dbRes.rows);
      })
      .catch(error => {
        res.sendStatus(500);
        console.log('GET positions failed: ', error);
      })
  });

module.exports = router;

