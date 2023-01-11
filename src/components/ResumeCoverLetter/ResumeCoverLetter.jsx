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

        setResumeFile(event.target.files);
    }

    const coverLetterHandler = (event) => {

        setCoverLetterFile(event.target.files);
    }

    return (
        <>
            <Box className='container'>
                <Typography variant='h3' style={{ marginTop: '1em' }}>Resume and Cover Letter</Typography>
                <Typography variant='h6' style={{ marginTop: '2em', marginBottom: '2em' }}>This identifying information will not be shared with the employers. You will have the opportunity to share this information once an employer reviews your application and initiates contact.</Typography>
                <Typography>Step 2 of 6</Typography>

                <Box sx={{ marginTop: '5em' }} className="Profile">
                    <form onSubmit={handleSubmit}>
                        <Box style={{ marginBottom: '3em' }} >
                            <Typography>Resume PDF only</Typography>
                            <input style={{ marginTop: '1em' }} required type="file" name="uploaded_file" onChange={resumeHandler} />

                        </Box>

                        <Box style={{ marginBottom: '3em' }}>
                            <Typography>Cover Letter PDF only</Typography>
                            <input style={{ marginTop: '1em' }} required type="file" name="uploaded_file" onChange={coverLetterHandler} />

                        </Box>

                        <br />
                        <Button variant="contained" color="primary" type="submit">Next</Button>
                    </form>
                </Box >
            </Box>
        </>
    );
}

export default ResumeCoverLetter;