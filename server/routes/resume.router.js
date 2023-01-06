const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const multer = require('multer');
// const path = require('node:path');

const storage = multer.diskStorage({
    destination: './public/files',
    filename: function (req, file, cb) {
        cb(null, 'resume-' + req.user.id + '.pdf');
    }
});

const upload = multer({
    storage: storage
})

router.post('/', upload.single('uploaded_file'), function (req, res) {
    console.log('in post router for multer');
    console.log('req.file is', req.file);
    console.log('file path is', req.file.path);

    if (req.isAuthenticated()) {
        console.log('is authenticated?', req.isAuthenticated());
        const sqlText = `UPDATE "candidate" SET resume_path = $1 WHERE candidate.user_id = $2;`;
        pool.query(sqlText, [req.file.path.slice(7), req.user.id])
            .then(dbRes => {
                res.sendStatus(201);
            })
            .catch(err => {
                console.error('error in adding file path', err);
                res.sendStatus(500);
            })
    } else {
        res.sendStatus(403);
    }
})

module.exports = router;