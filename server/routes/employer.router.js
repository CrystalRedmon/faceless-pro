const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');


// GET ALL JOB POSTS BY EMPLOYER ID
router.get('/', rejectUnauthenticated, (req, res) => {

  const sqlTxt = `SELECT *
                  FROM "job_post"
                  WHERE "employer_id" = $1;`;

  pool.query(sqlTxt, [req.user.user_info.id])    //💬 [req.user.user_info.id] === employer_id 
    .then(dbRes => {
      res.send(dbRes.rows);
    })
    .catch(error => {
      res.sendStatus(500);
    })
});

// GET SPECIFIC JOB POSTS BY JOB_POST.ID AND EMPLOYER ID/[req.user.user_info.id] 
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
    })
    .catch(error => {
      res.sendStatus(500);
    })
});

// GET LIST OF ALL APPLICANTS BASED ON JOB POST ID
router.get('/applicants/:id', rejectUnauthenticated, (req, res) => {


  const sqlTxt = `SELECT application.id, application.random_identifier, application.time, application.status
FROM application
JOIN job_post ON application.job_post_id = job_post.id
JOIN employer ON job_post.employer_id = employer.id
WHERE application.job_post_id = $1 AND employer.user_id = $2
ORDER BY application.id;`;

  pool.query(sqlTxt, [Number(req.params.id), req.user.user_info.user_id])
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
    })
    .catch(error => {
      res.sendStatus(500);
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
    })
    .catch(error => {
      res.sendStatus(500);
    })
})

// UPDATE JOB POST BY ID
router.put('/:id', rejectUnauthenticated, (req, res) => {

  const sqlTxt = `UPDATE "job_post"
                    SET "title" = $1,
                    "description" = $2
                    WHERE "id" = $3
                    AND "job_post"."employer_id"= $4;`;


  const sqlParams = [
    req.body.title,
    req.body.description,
    req.body.id,
    req.user.user_info.id
  ]

  pool.query(sqlTxt, sqlParams)
    .then(dbRes => {
      res.sendStatus(200);
    })
    .catch(error => {
      res.sendStatus(500);
    })

})

// GET application info
router.get('/applicant/:id', rejectUnauthenticated, (req, res) => {
  const applicationId = req.params.id;

  const sqlTxt = `SELECT
(
    SELECT json_agg(education.*)
    FROM education
    JOIN candidate ON education.candidate_id = candidate.id
    JOIN application ON candidate.id = application.candidate_id
    JOIN job_post ON application.job_post_id = job_post.id
    JOIN employer ON job_post.employer_id = employer.id
    WHERE employer.user_id = $2 AND application.id = $1
) AS education,
(
    SELECT json_agg(experience.*)
    FROM experience
    JOIN candidate ON experience.candidate_id = candidate.id
    JOIN application ON candidate.id = application.candidate_id
    JOIN job_post ON application.job_post_id = job_post.id
    JOIN employer ON job_post.employer_id = employer.id
    WHERE employer.user_id = $2 AND application.id = $1
) AS experience,
(
    SELECT json_agg(skill.*)
    FROM skill
    JOIN candidate ON skill.candidate_id = candidate.id
    JOIN application ON candidate.id = application.candidate_id
    JOIN job_post ON application.job_post_id = job_post.id
    JOIN employer ON job_post.employer_id = employer.id
    WHERE employer.user_id = $2 AND application.id = $1
) AS skill,
(
    SELECT json_agg(hyperlink.*)
    FROM hyperlink
    JOIN candidate ON hyperlink.candidate_id = candidate.id
    JOIN application ON candidate.id = application.candidate_id
    JOIN job_post ON application.job_post_id = job_post.id
    JOIN employer ON job_post.employer_id = employer.id
    WHERE employer.user_id = $2 AND application.id = $1
) AS hyperlink,
(
    SELECT json_agg(candidate.*)
    FROM candidate
    JOIN application ON candidate.id = application.candidate_id
    JOIN job_post ON application.job_post_id = job_post.id
    JOIN employer ON job_post.employer_id = employer.id
    WHERE employer.user_id = $2 AND application.id = $1
) AS profile,
(
    SELECT json_agg(application.*)
    FROM candidate
    JOIN application ON candidate.id = application.candidate_id
    JOIN job_post ON application.job_post_id = job_post.id
    JOIN employer ON job_post.employer_id = employer.id
    WHERE employer.user_id = $2 AND application.id = $1
) AS status_and_identifier
WHERE EXISTS (
    SELECT
    FROM application
    WHERE application.id = $1
);`;

  pool.query(sqlTxt, [applicationId, req.user.user_info.user_id])
    .then(dbRes => {
      let result = dbRes.rows[0];

      if (result.status_and_identifier[0].status != 'shared') {
        delete result.profile
        console.log('the applicant info sending is,', result);
        res.send(result);
      } else {
        console.log('the applicant SHARED info sending is,', result);
        res.send(result);
      }
    })
    .catch(error => {
      res.sendStatus(500);
    })
});

// UPDATE status of application
router.put('/status/:id', rejectUnauthenticated, (req, res) => {

  const queryText = `
UPDATE application
SET status = $1
FROM job_post
	JOIN employer ON employer.id = job_post.employer_id
WHERE
	application.id = $2 AND employer.user_id = $3;`;
  const sqlParams = [req.body.newStatus, req.params.id, req.user.user_info.user_id];

  pool.query(queryText, sqlParams)
    .then(dbRes => {
      res.sendStatus(201);
    })
    .catch(err => {
      res.sendStatus(500);
    })
});

module.exports = router;