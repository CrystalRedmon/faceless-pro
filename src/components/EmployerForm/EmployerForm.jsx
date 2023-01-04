import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';


function EmployerForm() {
    const dispatch = useDispatch();

    const [companyName, setCompanyName] = useState('');
    const [companyAddress, setCompanyAddress] = useState('');
    const [companyPhone, setCompanyPhone] = useState('');
    const [companyEmail, setCompanyEmail] = useState('');
    const [companyLink, setCompanyLink] = useState('');
    const [companyLogoPath, setCompanyLogoPath] = useState('');
    const [companyDescription, setCompanyDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch({
            type: 'ADD_EMPLOYER_INFO',
            payload: {
                company_name: companyName,
                company_address: companyAddress,
                company_phone: companyPhone,
                company_email: companyEmail,
                logo_path: companyLogoPath,
                company_description: companyDescription,
                company_link: companyLink,
            }
        })

        setCompanyName('');
        setCompanyAddress('');
        setCompanyPhone('');
        setCompanyEmail('');
        setCompanyLink('');
        setCompanyLogoPath('');
        setCompanyDescription('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField value={companyName} onChange={(event) => {setCompanyName(event.target.value)} } label="company name" />
            <TextField value={companyAddress} onChange={(event) => { setCompanyAddress(event.target.value) }} label="company address" />
            <TextField value={companyPhone} onChange={(event) => { setCompanyPhone(event.target.value) }} label="company phone number" />
            <TextField value={companyEmail} onChange={(event) => { setCompanyEmail(event.target.value) }} label="company email" />
            <TextField value={companyLink} onChange={(event) => { setCompanyLink(event.target.value) }} label="company site link" />
            <TextField value={companyLogoPath} onChange={(event) => { setCompanyLogoPath(event.target.value) }} label="company logo upload" />
            <TextField value={companyDescription} onChange={(event) => { setCompanyDescription(event.target.value) }} label="company description" />
            <Button type='submit' variant='contained'>submit</Button>
        </form>
    );
}

export default EmployerForm