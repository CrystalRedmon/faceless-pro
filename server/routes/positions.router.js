const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  const sqlTxt = ` SELECT *
                    FROM "job_post"
                    WHERE "title" % 'cool';`;

    pool.query(sqlTxt)
    .then(dbRes=>{
        res.send(dbRes.rows);
        console.log(dbRes.rows);
    })
    .catch(error=>{
        res.sendStatus(500);
        console.log('GET positions failed: ', error);
    })
});






/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;