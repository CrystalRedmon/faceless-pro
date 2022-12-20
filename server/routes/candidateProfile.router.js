const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
// GET the 3 Latest Job Posts in the Candidate Landing Page.
// router.get('/', (req, res) => {


//   // GET route code here

//   const sqlText = `SELECT * FROM "candidate"
//   WHERE "user_id" = $1;`;

//   pool.query(sqlText)
//   .then((result) =>{
//    // console.log('result is:',result.rows)
//    res.send(result.rows[0]) 
//    console.log(result.rows);
//   })
//   .catch((error) =>{
//    console.log('error fetching items from candidate', error)
//    res.sendStatus(500)
//   })


// });

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

// * /GET route template
// */
// GET the 3 Latest Job Posts in the Candidate Landing Page.
router.get('/education/:id', (req, res) => {


  // GET route code here

  const sqlText = `SELECT * FROM "education"
 WHERE "candidate_id" = $1;`;

  pool.query(sqlText, [req.params.id])
    .then((result) => {
      // console.log('result is:',result.rows)
      res.send(result.rows[0])
      console.log(result.rows);
    })
    .catch((error) => {
      console.log('error fetching items from education', error)
      res.sendStatus(500)
    })


});

/**
* POST route template
*/
router.post('/education', (req, res) => {
  // POST route code here
  const sqlText = `
 INSERT INTO "education" 
 (candidate_id, school, qualification, dates, note) 
 VALUES ($1, $2, $3, $4, $5)`;

  pool
    .query(sqlText, [req.body.candidate_id, req.body.school, req.body.qualification, req.body.dates, req.body.note])
    .then(() => res.sendStatus(200))
    .catch((err) => {
      console.log('Education Post info failed ', err);
      res.sendStatus(500);
    });
});



// * /GET route template
// */
// GET the 3 Latest Job Posts in the Candidate Landing Page.
router.get('/experience/:id', (req, res) => {


  // GET route code here

  const sqlText = `SELECT * FROM "experience"
  WHERE "candidate_id" = $1;`;

  pool.query(sqlText, [req.params.id])
    .then((result) => {
      // console.log('result is:',result.rows)
      res.send(result.rows[0])
      console.log(result.rows);
    })
    .catch((error) => {
      console.log('error fetching items from experience', error)
      res.sendStatus(500)
    })


});


/**
* POST route template
*/
router.post('/experience', (req, res) => {
  // POST route code here
  const sqlText = `
  INSERT INTO "experience" 
  (candidate_id, employer, title, dates, job_duties) 
  VALUES ($1, $2, $3, $4, $5)`;

  pool
    .query(sqlText, [req.body.candidate_id, req.body.employer, req.body.title, req.body.dates, req.body.job_duties])
    .then(() => res.sendStatus(200))
    .catch((err) => {
      console.log('Experience Post info failed ', err);
      res.sendStatus(500);
    });
});




// * /GET route template
// */
// GET the 3 Latest Job Posts in the Candidate Landing Page.
router.get('/skill/:id', (req, res) => {


  // GET route code here

  const sqlText = `SELECT * FROM "skill"
  WHERE "candidate_id" = $1;`;

  pool.query(sqlText, [req.params.id])
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
router.delete('/skill/:id', (req, res) => {


  // GET route code here

  const sqlText = `DELETE  FROM "skill"
  WHERE "id" = $1;`;

  pool.query(sqlText, [req.params.id])
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
router.delete('/experience/:id', (req, res) => {


  // GET route code here

  const sqlText = `DELETE  FROM "experience"
  WHERE "id" = $1;`;

  pool.query(sqlText, [req.params.id])
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
router.delete('/education/:id', (req, res) => {


  // GET route code here

  const sqlText = `DELETE  FROM "education"
  WHERE "id" = $1;`;

  pool.query(sqlText, [req.params.id])
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

/**
* POST route template
*/
router.post('/skill', (req, res) => {
  // POST route code here
  const sqlText = `
    INSERT INTO "skill" 
    (candidate_id, skill_name) 
    VALUES ($1, $2)`;

  pool
    .query(sqlText, [req.body.candidate_id, req.body.skill_name])
    .then(() => res.sendStatus(200))
    .catch((err) => {
      console.log('skill Post info failed ', err);
      res.sendStatus(500);
    });
});

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
      console.log('recent jobs:', dbRes.rows);
    })
    .catch(error => {
      res.sendStatus(500);
      console.log('GET positions for home pagefailed: ', error);
    })
});

router.get('/:keyword', (req, res) => {
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
router.delete('/:id', (req, res) => {


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