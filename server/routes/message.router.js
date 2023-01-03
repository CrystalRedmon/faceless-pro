const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/:id', rejectUnauthenticated, (req, res) => {
    console.log('message req.body',req.params.id)
    console.log('req.user',req.user)
    const sqlTxt = `
    SELECT "employer".company_name, "job_post".title,"application".random_identifier,"message"."content","message"."time","message".is_from_candidate
    FROM "message"
   	JOIN "application"
   		ON "application".id = "message".application_id
   	JOIN "job_post"
   		ON "job_post".id = "application".job_post_id
   	JOIN "employer"
   		ON "employer".id = "job_post".employer_id
   	JOIN "candidate"
   		ON "candidate".id = "application".candidate_id
   	JOIN "user"
   		ON "user".id = "candidate".user_id
    WHERE "message".application_id = $1 AND "candidate".id = $2;`;
  
    pool.query(sqlTxt,[req.params.id,req.user.user_info.id])
      .then(dbRes => {
        // console.log('message rows:',dbRes.rows)
        res.send(dbRes.rows);
      })
      .catch(error => {
        res.sendStatus(500);
      })
  });

  router.post('/', rejectUnauthenticated, (req, res) => {
    console.log("message from client/req.body",req.body)
    console.log('req.user',req.user.user_type)
    // let userType = "candidate";
    let isFromCandidate = (req.user.user_type === "candidate") ? true : false;

    const sqlTxt = `
    INSERT INTO "message" ( "application_id","content","is_from_candidate") 
    VALUES ($1,$2,$3);
    `;
    console.log('query is',[req.body.jobId,req.body.message,isFromCandidate])
    pool.query(sqlTxt,[req.body.jobId,req.body.message,isFromCandidate])
    .then(() => res.sendStatus(200))
      .catch(error => {
        res.sendStatus(500);
      })
  });

module.exports = router;