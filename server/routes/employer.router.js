const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


// GET ALL JOB POSTS BY EMPLOYER ID/[req.user.user_info.id] 
router.get('/', (req, res) => {

  const sqlTxt = `SELECT *
                  FROM "job_post"
                  WHERE "job_post"."employer_id" = $1;`;


  pool.query(sqlTxt, [req.user.user_info.id])    //💬 [req.user.user_info.id] === employer_id 
    .then(dbRes => {
      res.send(dbRes.rows);
      console.log(dbRes.rows);
    })
    .catch(error => {
      res.sendStatus(500);
      console.log('GET positions failed: ', error);
    })
});

// GET SPECIFIC JOB POSTS BY JOB_POST.ID  AND EMPLOYER ID/[req.user.user_info.id] 
router.get('/:id', (req, res) => {

  const sqlTxt = `SELECT "job_post".title, "job_post".description
                  FROM "job_post"
                  WHERE "job_post"."employer_id" = $1
                  AND "job_post"."id" = $2;`;

  const sqlParams = [
    req.user.user_info.id,    //💬 [req.user.user_info.id] === employer_id 
    req.params.id
  ]

  pool.query(sqlTxt, sqlParams)
    .then(dbRes => {
      res.send(dbRes.rows);
      console.log(dbRes.rows);
    })
    .catch(error => {
      res.sendStatus(500);
      console.log('GET positions failed: ', error);
    })
});


// CREATE JOB POSTS
router.post('/', (req, res) => {

  const sqlTxt = `INSERT INTO "job_post" ("employer_id", "title", "description")
                VALUES ($1, $2, $3);`

  const sqlParams = [
    req.user.user_info.id,
    req.body.title,
    req.body.description
  ]

  pool.query(sqlTxt, sqlParams)
    .then(dbRes => {
      res.sendStatus(200);
      console.log('Post job successful: ', dbRes);
    })
    .catch(error => {
      res.sendStatus(500);
      console.log('Post job failed: ', error);
    })

});


// DELETE JOB POST BY ID
router.delete('/:id', (req, res) => {
  const sqlTxt = `DELETE 
                  FROM "job_post"
                  WHERE "job_post"."employer_id" = $1
                  AND "job_post"."id" = $2;`;

  const sqlParams = [
    req.user.user_info.id,
    req.params.id
  ]


  pool.query(sqlTxt, sqlParams)
    .then(dbRes => {
      res.sendStatus(200);
      console.log('Delete job successful: ', dbRes);
    })
    .catch(error => {
      res.sendStatus(500);
      console.log('Delete job failed: ', error);
    })

})

// UPDATE JOB POST BY ID
router.put('/:id', (req, res)=>{

  const sqlTxt = ` UPDATE "job_post"
                    SET "title" = $1,
                    "description" = $2,
                    WHERE "id" = $3;`;

  const sqlParams =[
    req.body.title,
    req.body.description,
    req.user.user_info.id
  ]

  pool.query(sqlTxt, sqlParams)
  .then(dbRes => {
    res.sendStatus(200);
    console.log('Update job successful: ', dbRes);
  })
  .catch(error => {
    res.sendStatus(500);
    console.log('Update job failed: ', error);
  })

})








module.exports = router;