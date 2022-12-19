const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


// GET ALL JOB POSTS BY EMPLOYER ID/[req.user.user_info.id] 
router.get('/', (req, res) => {

  const sqlTxt = `SELECT *
                  FROM "job_post"
                  WHERE "job_post"."employer_id" = $1;`;

  // console.log('this is the user: ', req.user);
  pool.query(sqlTxt, [req.user.user_info.id])    //💬 [req.user.user_info.id] === employer_id 
    .then(dbRes => {
      res.send(dbRes.rows);
      // console.log(dbRes.rows);
    })
    .catch(error => {
      res.sendStatus(500);
      // console.log('GET positions failed: ', error);
    })
});

// GET SPECIFIC JOB POSTS BY JOB_POST.ID  AND EMPLOYER ID/[req.user.user_info.id] 
router.get('/:id', (req, res) => {

  const sqlTxt = `SELECT "job_post".title, "job_post".description, "job_post".id
                  FROM "job_post"
                  WHERE "job_post"."employer_id" = $1
                  AND "job_post"."id" = $2;`;

  const sqlParams = [
    req.user.user_info.id,    //💬 [req.user.user_info.id] === employer_id 
    req.params.id
  ]

  pool.query(sqlTxt, sqlParams)
    .then(dbRes => {
      res.send(dbRes.rows[0]);
      console.log(dbRes.rows[0]);
    })
    .catch(error => {
      res.sendStatus(500);
      // console.log('GET positions failed: ', error);
    })
});

router.get('/applicants/:id', (req, res) => {

  const sqlTxt = `SELECT * FROM application WHERE job_post_id = $1;`;

  pool.query(sqlTxt, [req.params.id])
    .then(dbRes => {
      res.send(dbRes.rows);
    })
    .catch(error => {
      res.sendStatus(500);
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
      // console.log('Post job successful: ', dbRes);
    })
    .catch(error => {
      res.sendStatus(500);
      // console.log('Post job failed: ', error);
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
      // console.log('Delete job successful: ', dbRes);
    })
    .catch(error => {
      res.sendStatus(500);
      // console.log('Delete job failed: ', error);
    })

})

// UPDATE JOB POST BY ID
router.put('/:id', (req, res) => {

  const sqlTxt = ` UPDATE "job_post"
                    SET "title" = $1,
                    "description" = $2
                    WHERE "id" = $3;`;

  const sqlParams = [
    req.body.title,
    req.body.description,
    req.body.id
  ]

  pool.query(sqlTxt, sqlParams)
    .then(dbRes => {
      res.sendStatus(200);
      // console.log('Update job successful: ', dbRes.rows);
    })
    .catch(error => {
      res.sendStatus(500);
      // console.log('Update job failed: ', error);
    })

})

// GET applicant not_shared info by applicant.candidate_id
router.get('/not_shared/:id', (req, res) => {

  const candidateId = req.params.id;

  const sqlTxt = `SELECT (SELECT json_agg(e.*)
                      FROM   education e
                      WHERE  e.candidate_id = $1)  AS education
                  , (SELECT json_agg(e.*)
                      FROM   experience e
                      WHERE  e.candidate_id = $1)  AS experience
                  , (SELECT json_agg(e.*)
                      FROM   skill e
                      WHERE  e.candidate_id = $1)  AS skill
                  , (SELECT json_agg(e.*)
                      FROM   hyperlink e
                      WHERE  e.candidate_id = $1)  AS hyperlink
                  WHERE  EXISTS (SELECT FROM application a WHERE a.candidate_id = $1);`;

  pool.query(sqlTxt, [candidateId])
    .then(dbRes => {
      res.send(dbRes.rows);
    })
    .catch(error => {
      res.sendStatus(500);
    })
});

module.exports = router;