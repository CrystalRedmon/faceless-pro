const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
// GET the 3 Latest Job Posts in the Candidate Landing Page.
router.get('/', (req, res) => {

    const sqlTxt = `SELECT "job_post".id, "employer".company_name,"employer".company_address,"job_post".title
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
        console.log('GET positions for home pagefailed: ', error);
      })
  });

  router.get('/:keyword', (req, res) => {
    console.log("this is the req.body",req.body);

    const sqlTxt = `  SELECT "employer".company_name,"employer".company_address,"job_post".title
    FROM "job_post"
    JOIN "employer"
    ON "job_post".employer_id = "employer".id 
    WHERE "job_post".title LIKE '%$1%'
     OR "description" LIKE '%$2%';
  `;
  // const keyword = req.params.keyword
  
  
  
    pool.query(sqlTxt, [req.params.keyword, req.params.keyword])  
      .then(dbRes => {
        res.send(dbRes.rows);
        console.log(dbRes.rows);
      })
      .catch(error => {
        res.sendStatus(500);
        console.log('GET job SEARCH ', error);
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
        console.log('GET job details failed: ', error);
      })
  });

  //SAVE jobs 
  router.post('/:id', (req, res) => {
    // POST route code here

    const sqlTxt =`  INSERT INTO saved_jobs ("candidate_id", "job_post_id") 
    VALUES($1,$2);`;

    pool.query(sqlTxt, [req.user.user_info.id, req.params.id])
      .then(dbRes => {
        res.send(dbRes.rows);
        console.log(dbRes.rows);
      })
      .catch(error => {
        res.sendStatus(500);
        console.log('POST Saved jobs failed: ', error);
      })
  });

   // Delete Candidate Saved Jobs
  router.delete('/:id', (req, res) => {
 

    const sqlTxt =`DELETE FROM saved_jobs WHERE "candidate_id" = $1 AND "job_post_id" = $2;`;

    pool.query(sqlTxt, [req.user.user_info.id, req.params.id])
      .then(dbRes => {
        res.send(dbRes.rows);
        console.log(dbRes.rows);
      })
      .catch(error => {
        res.sendStatus(500);
        console.log('Delete Saved Jobs Failed: ', error);
      })
  });

module.exports = router;

