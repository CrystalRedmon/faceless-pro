const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');
const { response } = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
require('dotenv').config();

router.get('/profile', rejectUnauthenticated, (req, res) => {
  console.log("in candidateProfile");
  console.log('THE req.user.user_info.user_id', req.user.user_info.user_id);

  // FIX!!!!

  const sqlTxt = `
                  SELECT 
                  json_agg(education.*) as education,
                  json_agg(experience.*) as experience,
                  json_agg(skill.*) as skill,
                  json_agg(hyperlink.*) as hyperlink
                FROM candidate
                JOIN education
                  ON education.candidate_id = candidate.id
                JOIN experience
                  ON experience.candidate_id = candidate.id
                JOIN skill
                  ON skill.candidate_id = candidate.id
                JOIN hyperlink
                  ON hyperlink.candidate_id = candidate.id
                WHERE candidate.user_id = $1;
                `;

  pool.query(sqlTxt, [req.user.user_info.user_id])
    .then(dbRes => {
      console.log(dbRes.rows[0]);
      res.send(dbRes.rows[0]);
    })
    .catch(error => {
      res.sendStatus(500);
      console.log('GET candidate profile error', error);
    })
});

//POST Candidate Profile information 
router.post('/profile', rejectUnauthenticated, (req, res) => {
  // POST route code here
  console.log("IN Candidate POST")
  // const sqlText = `
  // INSERT INTO "candidate" 
  // (user_id, first_name, last_name,email,linkedin_link, resume_path, cover_letter_path) 
  // VALUES ($1, $2, $3, $4, $5, $6,$7)`;
  const sqlText = `
  INSERT INTO "candidate" 
  (user_id, first_name, last_name,email,linkedin_link) 
  VALUES ($1, $2, $3, $4, $5)`;
  const sqlParam = [
    req.user.id,
    req.body.FirstName,
    req.body.LastName,
    req.body.Email,
    req.body.LinkedIn,
  ]
  pool
    .query(sqlText, sqlParam)
    .then(() => res.sendStatus(200))
    .catch((err) => {
      console.log('Candidate Post info failed ', err);
      res.sendStatus(500);
    });
});

//GET education for candidate.
router.get('/education', rejectUnauthenticated, (req, res) => {

  const sqlText = `SELECT * FROM "education"
 WHERE "candidate_id" = $1;`;

  pool.query(sqlText, [req.user.user_info.id])
    .then((result) => {
      // console.log('result is:',result.rows)
      res.send(result.rows[0])
      console.log(result.rows);
    })
    .catch((error) => {
      console.log('error fetching items from education', error);
      res.sendStatus(500)
    })


});


router.post('/education', rejectUnauthenticated, (req, res) => {
  // console.log('req.body', req.body);
  const sqlParam = [
    req.user.user_info.id,
    req.body.School,
    req.body.Major,
    req.body.Dates,
    req.body.Notes
  ]

  const sqlText = `
 INSERT INTO "education" 
 ("candidate_id", "school", "qualification", "dates", "note") 
 VALUES ($1, $2, $3, $4, $5)`;

  pool
    .query(sqlText, sqlParam)
    .then(() => res.sendStatus(200))
    .catch((err) => {
      console.log('Education Post info failed ', err);
      res.sendStatus(500);
    });
});


//GET experience for candiddate

router.get('/experience/:id', rejectUnauthenticated, (req, res) => {

  const sqlText = `SELECT * FROM "experience"
  WHERE "candidate_id" = $1;`;

  pool.query(sqlText, [req.user.user_info.id])
    .then((result) => {
      res.send(result.rows[0])
      console.log(result.rows);
    })
    .catch((error) => {
      console.log('error fetching items from experience', error)
      res.sendStatus(500)
    })


});



//POST experience for candidate.
router.post('/experience', rejectUnauthenticated, (req, res) => {
  // console.log('req.body', req.body);
  const sqlParam = [
    req.user.user_info.id,
    req.body.Company,
    req.body.Title,
    req.body.Dates,
    req.body.JobDuty
  ]

  const sqlText = `
  INSERT INTO "experience" 
  (candidate_id, employer, title, dates, job_duties) 
  VALUES ($1, $2, $3, $4, $5)`;

  pool
    .query(sqlText, sqlParam)
    .then(() => res.sendStatus(200))
    .catch((err) => {
      console.log('Education Post info failed ', err);
      res.sendStatus(500);
    });
});

//GET skill for candidate.

router.get('/skill/:id', rejectUnauthenticated, (req, res) => {

  const sqlText = `SELECT * FROM "skill"
  WHERE "candidate_id" = $1;`;

  pool.query(sqlText, [req.user.user_info.id])
    .then((result) => {
      // console.log('result is:',result.rows)
      res.send(result.rows[0])
      console.log(result.rows);
    })
    .catch((error) => {
      console.log('error fetching items from skill', error)
      res.sendStatus(500)
    })


});

// DELETE a candidates skill
router.delete('/skill/:id', rejectUnauthenticated, (req, res) => {

  const sqlText = `DELETE  FROM "skill"
  WHERE "id" = $1
  AND "candidate_id" = $2;`;

  const sqlParams = [
    req.params.id,
    req.user.user_info.id
  ]

  pool.query(sqlText, sqlParams)
    .then((result) => {
      // console.log('result is:',result.rows)
      res.send(result.rows[0])
      console.log(result.rows);
    })
    .catch((error) => {
      console.log('error fetching items from skill', error)
      res.sendStatus(500)
    })


});

// DELETE a candidates experience
router.delete('/experience/:id', rejectUnauthenticated, (req, res) => {


  // GET route code here

  const sqlText = `DELETE  FROM "experience"
  WHERE "id" = $1
  AND "candidate_id" = $2;`;

  const sqlParams = [
    req.params.id,
    req.user.user_info.id
  ]
  pool.query(sqlText, sqlParams)
    .then((result) => {
      // console.log('result is:',result.rows)
      res.send(result.rows[0])
      console.log(result.rows);
    })
    .catch((error) => {
      console.log('error fetching items from skill', error)
      res.sendStatus(500)
    })


});

// DELETE a candidates education
router.delete('/education/:id', rejectUnauthenticated, (req, res) => {

  const sqlText = `DELETE  FROM "education"
  WHERE "id" = $1
  AND "candidate_id" = $2;`;

  const sqlParams = [
    req.params.id,
    req.user.user_info.id
  ]
  pool.query(sqlText, sqlParams)
    .then((result) => {
      // console.log('result is:',result.rows)
      res.send(result.rows[0])
      console.log(result.rows);
    })
    .catch((error) => {
      console.log('error fetching items from skill', error)
      res.sendStatus(500)
    })


});

//POST skill for candidate.
router.post('/skill', rejectUnauthenticated, (req, res) => {
  console.log('req.body', req.body);
  const sqlParam = [
    req.user.user_info.id,
    req.body.Skill
  ]

  const sqlText = `
INSERT INTO "skill" 
(candidate_id, skill_name) 
VALUES ($1, $2)`;

  pool
    .query(sqlText, sqlParam)
    .then(() => res.sendStatus(200))
    .catch((err) => {
      console.log('Skill Post info failed ', err);
      res.sendStatus(500);
    });
});

//POST hyperlink for candidate.
router.post('/hyperlink', rejectUnauthenticated, (req, res) => {
  console.log('req.body', req.body);
  const sqlParam = [
    req.user.user_info.id,
    req.body.Hyperlink
  ]

  const sqlText = `
INSERT INTO "hyperlink" 
(candidate_id, link) 
VALUES ($1, $2)`;

  pool
    .query(sqlText, sqlParam)
    .then(() => res.sendStatus(200))
    .catch((err) => {
      console.log('hyperlink post info failed ', err);
      res.sendStatus(500);
    });
});


// GET the 3 Latest Job Posts in the Candidate Landing Page.
router.get('/', rejectUnauthenticated, (req, res) => {


  const sqlTxt = `SELECT "job_post".id, "employer".company_name,"employer".company_address,"job_post".title
    FROM "job_post"
    JOIN "employer"
      ON "job_post".employer_id = "employer".id
    ORDER BY "job_post".id DESC;`;


  pool.query(sqlTxt)
    .then(dbRes => {
      res.send(dbRes.rows);
      console.log('recent jobs:', dbRes.rows);
    })
    .catch(error => {
      res.sendStatus(500);
      console.log('GET positions for home pagefailed: ', error);
    })
});

//GET the job search by keyword for candidate
router.get('/:keyword', rejectUnauthenticated, (req, res) => {
  console.log("req.params.keyword", req.params.keyword);
  const sqlTxt = `
                  SELECT "employer".company_name,"employer".company_address,"job_post".title, "job_post".id
                  FROM "job_post"
                  JOIN "employer"
                  ON "job_post".employer_id = "employer".id 
                  WHERE SIMILARITY("title", $1) > 0.01;
                  `;
  // const keyword = req.params.keyword
  // OR "description" LIKE '%$2%';


  pool.query(sqlTxt, [req.params.keyword])
    .then(dbRes => {
      res.send(dbRes.rows);
      console.log(dbRes.rows);
    })
    .catch(error => {
      res.sendStatus(500);
      console.log('GET job SEARCH ', error);
    })
});


//SAVE jobs 
router.post('/:id', rejectUnauthenticated, (req, res) => {
  // POST route code here

  const sqlTxt = `  INSERT INTO saved_jobs ("candidate_id", "job_post_id") 
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
router.delete('/:id', rejectUnauthenticated, (req, res) => {


  const sqlTxt = `DELETE FROM saved_jobs WHERE "candidate_id" = $1 AND "job_post_id" = $2;`;

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