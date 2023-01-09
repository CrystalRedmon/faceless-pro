import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Typography, Box } from '@material-ui/core';

function ResumeCoverLetter() {

    const dispatch = useDispatch();
    const history = useHistory();
    const [resumeFile, setResumeFile] = useState('');
    const [coverLetterFile, setCoverLetterFile] = useState('');

    const handleSubmit = (event) => {
        {
            event.preventDefault();

            dispatch({
                type: 'EDIT_RESUME',
                payload: resumeFile
            })
            dispatch({
                type: 'EDIT_COVER_LETTER',
                payload: coverLetterFile
            })

            history.push('/education');
        }
    }

    const resumeHandler = (event) => {
        console.log('in resumeHandler');
        setResumeFile(event.target.files);
    }

    const coverLetterHandler = (event) => {
        console.log('in coverLetterHandler');
        setCoverLetterFile(event.target.files);
    }

    return (
        <>
            <Box style={{ textAlign: "center", marginTop: '1em' }}>
                <h2 style={{ textAlign: "center", marginTop: '1em' }}>Resume and Cover Letter Upload</h2>
                <h3 style={{ textAlign: "center", marginTop: '2em', marginBottom: '3em' }}>This information will not be shared with the employers until you choose to share</h3>

                <div className="Profile">
                    <form onSubmit={handleSubmit}>
                        <Box style={{ marginBottom: '3em' }} >
                            <Typography>Resume PDF only</Typography>
                            <input style={{marginTop:'1em'}}required type="file" name="uploaded_file" onChange={resumeHandler} />
                            {/* <input type="submit" value="Upload" /> */}
                        </Box>

                        <Box style={{ marginBottom: '3em' }}>
                            <Typography>Cover Letter PDF only</Typography>
                            <input  style={{marginTop:'1em'}} required type="file" name="uploaded_file" onChange={coverLetterHandler} />
                            {/* <input type="submit" value="Upload" /> */}

                        </Box>

                        <br />
                        <Button variant="contained" color="primary" type="submit">Submit</Button>
                    </form>
                </div>
            </Box>
        </>
    );
}

export default ResumeCoverLetter;