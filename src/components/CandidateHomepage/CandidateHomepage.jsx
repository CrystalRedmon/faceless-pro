import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom"
import { useEffect } from 'react';

import { Grid } from "@mui/material"

function CandidateHomepage() {

    const dispatch = useDispatch();
    const history = useHistory();

    const candidate = useSelector(store => store.user);
    const education = useSelector(store => store.education);
    const experience = useSelector(store => store.experience);
    const skills = useSelector(store => store.skills);

    const editProfile = () => {
        //history.push('/user/editCandidate')
    }

    useEffect(() => {
        dispatch({
            type: 'FETCH_CANDIDATE_PROFILE_INFO'
        })
    }, [])

    return (<>

        <Grid container spacing={2}>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
                <h1 mb={20}>Welcome, {candidate.user_info.first_name} {candidate.user_info.last_name}</h1>
                <p> This information will not be shared with employers</p>
                <ul className='candidateinfo'>
                    <li>{candidate.user_info.first_name} {candidate.user_info.last_name}</li>
                    <li>{candidate.user_info.email}</li>
                    <li>{candidate.user_info.linkedin_link}</li>

                </ul>
                <p> _________________________________________________________</p>
                <p>The following information will be shared with employers</p>
                <ul className='education'>
                    <p>Education:</p>
                    <li>{education.school} </li>
                    <li>{education.qualification}</li>
                    <li>{education.dates}</li>
                    <li>{education.note}</li>

                </ul>
                <ul>
                    <p>Experience:</p>
                    {/* <li>{experience.employer} </li>
                    <li>{experience.title}</li>
                    <li>{experience.dates}</li>
                    <li>{experience.job_duties}</li> */}

                </ul>
                <ul>
                    <p>Skills:</p>
                    {/* <li>{skill.skill_name} </li> */}
                </ul>

                {/* <li>{candidate.user_info.resume_path}</li>
                    <li>{candidate.user_info.cover_letter_path}</li> */}


                <Link variant='contained' onClick={editProfile} component="button">Edit Your Profile</Link>
            </Grid>
            <Grid item xs={3}> </Grid>

        </Grid>

    </>)
}


export default CandidateHomepage;