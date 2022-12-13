const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {

  const sqlTxt = `SELECT "job_post".title, "job_post".description
                  FROM "job_post"
                  WHERE "job_post"."employer_id" = $1;`;              
                  
               
    pool.query(sqlTxt, [req.user.user_info.id])    //💬 [req.user.user_info.id] === employer_id 
    .then(dbRes=>{
        res.send(dbRes.rows);
        console.log(dbRes.rows);
    })
    .catch(error=>{
        res.sendStatus(500);
        console.log('GET positions failed: ', error);
    })
});



router.post('/', (req, res) => {
 
const sqlTxt = `INSERT INTO "job_post" ("employer_id", "title", "description")
                VALUES ($1, $2, $3);`

const sqlParams = [
  req.user.user_info.id,
  req.body.title,
  req.body.description
]

     pool.query(sqlTxt, sqlParams )
     .then(dbRes=>{
      res.sendStatus(200);
      console.log('Post job successful: ', dbRes);
     })      
     .catch(error=>{
      res.sendStatus(500);
      console.log('Post job failed: ', error);
     })

});









module.exports = router;