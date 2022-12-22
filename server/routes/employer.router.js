const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');


// GET ALL JOB POSTS BY EMPLOYER ID/[req.user.user_info.id] 
router.get('/', rejectUnauthenticated, (req, res) => {

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
router.get('/:id', rejectUnauthenticated, (req, res) => {

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

router.get('/applicants/:id', rejectUnauthenticated, (req, res) => {

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
router.post('/', rejectUnauthenticated, (req, res) => {

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
router.delete('/:id', rejectUnauthenticated, (req, res) => {
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
router.put('/:id', rejectUnauthenticated, (req, res) => {

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

// GET applicant not_shared info by applicant.id
router.get('/not_shared/:id', rejectUnauthenticated, async (req, res) => {
  try {
    const applicationId = req.params.id;

    let dbRes = await pool.query(
      `SELECT (SELECT json_agg(ed.*)
          FROM   education ed
          WHERE  ed.candidate_id = $1)  AS education
        , (SELECT json_agg(ex.*)
          FROM   experience ex
          WHERE  ex.candidate_id = $1)  AS experience
        , (SELECT json_agg(s.*)
          FROM   skill s
          WHERE  s.candidate_id = $1)  AS skill
        , (SELECT json_agg(h.*)
          FROM   hyperlink h
          WHERE  h.candidate_id = $1)  AS hyperlink
      WHERE  EXISTS (SELECT FROM application a WHERE a.id = $1);`, [applicationId]);
    res.send(dbRes.rows[0]);
  }
  catch (err) {
    console.error('GET /not_shared/:id', err);
    res.sendStatus(500);
  }
})

// GET application info by application.id
router.get('/applicant/:id', rejectUnauthenticated, (req, res) => {

  const applicationId = req.params.id;

  const sqlTxt = `SELECT * FROM application WHERE id = $1;`;

  pool.query(sqlTxt, [applicationId])
    .then(dbRes => {
      res.send(dbRes.rows[0]);
    })
    .catch(error => {
      res.sendStatus(500);
    })
});

// UPDATE status of application by application.id
router.put('/status/:id', rejectUnauthenticated, (req, res) => {

  const queryText = `UPDATE "application" SET "status" = $1 WHERE id = $2;`;
  const sqlParams = [req.body.newStatus, req.params.id];

  pool.query(queryText, sqlParams)
    .then(dbRes => {
      res.sendStatus(201);
    })
    .catch(err => {
      res.sendStatus(500);
    })
});

// GET applicant shared info by applicant.id
router.get('/shared/:id', rejectUnauthenticated, async (req, res) => {
  try {
    const applicationId = req.params.id;

    let dbRes = await pool.query(
      `SELECT first_name, last_name, email, linkedin_link, resume_path, cover_letter_path 
        FROM application
        JOIN candidate ON application.candidate_id = candidate.id
        WHERE application.id = $1;`, [applicationId]);
    res.send(dbRes.rows[0]);
  }
  catch (err) {
    console.error('GET /shared/:id', err);
    res.sendStatus(500);
  }
})

module.exports = router;