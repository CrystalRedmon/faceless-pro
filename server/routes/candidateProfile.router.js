const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here

  const sqlText = `SELECT * FROM "candidate"
  WHERE "user_id" = $1;`;

  pool.query(sqlText)
  .then((result) =>{
   // console.log('result is:',result.rows)
   res.send(result.rows[0]) 
   console.log(result.rows);
  })
  .catch((error) =>{
   console.log('error fetching items from candidate', error)
   res.sendStatus(500)
  })


});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
  const sqlText = `
  INSERT INTO "candidate" 
  (user_id, first_name, last_name, linkedin_link, resume_path, cover_letter_path) 
  VALUES ($1, $2, $3, $4, $5, $6)`;

  pool
  .query(sqlText, [req.body.user_id, req.body.first_name, req.body.last_name, req.body.linkedin_link, req.body.resume_path, req.body.cover_letter_path])
  .then(() => res.sendStatus(200))
  .catch((err) => {
    console.log('Candidate Post info failed ', err);
    res.sendStatus(500);
  });
});

module.exports = router;

