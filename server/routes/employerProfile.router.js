const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');


 router.get('/', rejectUnauthenticated, (req, res) => {
  

  const sqlText = `SELECT * FROM "employer"
  WHERE "user_id" = $1;`;

  pool.query(sqlText, [req.user.id])
  .then((result) =>{
    // console.log('result is:', result.rows[0]);
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
router.post('/', rejectUnauthenticated, (req, res) => {
  // POST route code here
  const sqlText = `
  INSERT INTO "employer" 
  (user_id, company_name, company_address, company_phone, email, company_description, company_link) 
  VALUES ($1, $2, $3, $4, $5, $6, $7)`;

  pool
  .query(sqlText, [req.user.id, req.body.company_name, req.body.company_address, req.body.company_phone, req.body.company_email, req.body.company_description, req.body.company_link])
  .then((queryResponse) => res.send(queryResponse))
  .catch((err) => {
    console.log('Employer Post info failed ', err);
    res.sendStatus(500);
  });
});

router.put('/', rejectUnauthenticated, (req, res) => {
  const sqlText = `UPDATE employer SET company_name = $1, company_address = $2, company_phone = $3, email = $4, company_description = $5, company_link = $6 WHERE user_id = $7`;
  pool.query(sqlText, [req.body.company_name, req.body.company_address, req.body.company_phone, req.body.email, req.body.company_description, req.body.company_link, req.user.id])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});

module.exports = router;
