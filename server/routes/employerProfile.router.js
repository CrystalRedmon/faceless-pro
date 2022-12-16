const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
 router.get('/', (req, res) => {
  // GET route code here

  const sqlText = `SELECT *FROM "employer"
  WHERE "user_id" = $1;`;

  pool.query(sqlText)
  .then((result) =>{
   // console.log('result is:',result.rows)
   res.send(result.rows[0]) 
  //  console.log(result.rows);
  })
  .catch((error) =>{
   console.log('error fetching items', error)
   res.sendStatus(500)
  })

});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
  const sqlText = `
  INSERT INTO "employer" 
  (user_id, company_name, company_address, company_phone, email, logo_path, company_description, company_link) 
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`;

  pool
  .query(sqlText, [req.user.id, req.body.company_name, req.body.company_address, req.body.company_phone, req.body.company_email, req.body.logo_path, req.body.company_description, req.body.company_link])
  .then((queryResponse) => res.send(queryResponse))
  .catch((err) => {
    console.log('Employer Post info failed ', err);
    res.sendStatus(500);
  });
});

module.exports = router;
