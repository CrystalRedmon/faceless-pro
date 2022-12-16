import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';


function CandidateProfile() {
    const [profile, setProfile] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const getProfile = (evt) => {
        evt.preventDefault();
        console.log('inside Profile', profile)
        dispatch({
            type: 'GET_PROFILE',
            payload: profile
        })
        history.push('/Breadcrumbs');
    }
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [linkedIn, setLinkedIn] = useState('');
    const [resume, setResume] = useState('');
    const [coverLetter, setCoverLetter] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('in handleSubmit');

        dispatch({
            type: 'ADD_EMPLOYER_INFO',
            payload: {
                company_name: companyName,
                company_address: companyAddress,
                company_phone: companyPhone,
                logo_path: companyLogoPath,
                company_description: companyDescription,
                company_link: companyLink,
            }
        })

        setCompanyName('');
        setCompanyAddress('');
        setCompanyPhone('');
        setCompanyLink('');
        setCompanyLogoPath('');
        setCompanyDescription('');
    }

    return (
        <>
            <h2>Welcome to your profile!</h2>
            <form onSubmit={handleSubmit}>
            <TextField value={firstName} onChange={(event) => {setFirstName(event.target.value)} } label="First Name" />
            <TextField value={lastName} onChange={(event) => { setLastName(event.target.value) }} label="Last Name" />
            <TextField value={linkedIn} onChange={(event) => { setLinkedIn(event.target.value) }} label="LinkedIn" />
            <TextField value={resume} onChange={(event) => { setResume(event.target.value) }} label="Resume" />
            <TextField value={coverLetter} onChange={(event) => { setCoverLetter(event.target.value) }} label="company logo upload" />
            <Button type='submit' variant='contained'>submit</Button>
        </form>

            <p>Click here to complete your profile</p>

            <button onClick={getProfile}>Complete Profile</button>
            
        </>
    )
}

export default CandidateProfile;


//Add conditional rendering because they should only be prompted to complete their
//profile if it is incomplete.
//Otherwise it should display their profile with an option to edit