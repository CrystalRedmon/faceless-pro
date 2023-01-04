
import React from 'react';
import axios from 'axios';

import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';


function CandidateProfilePage(){
    // history = useHistory();

    // const education = useSelector((store)=>{
    //     return store.education
    // })
    // const experience = useSelector((store)=>{
    //     return store.experience
    // })
    // const skills = useSelector((store)=>{
    //     return store.skills
    // })




    const editProfile = () => {
        // removeData();
      
            console.log('inside candidate profile')
        
            // history.push('/');
          }

          return (
            <div className="container">
              <h4>Profile</h4>
        
              
              <p>Education: </p>
              <p> 
                Experience: 
            </p>
        
              <p> Skills:</p>
          
            <button onClick={editProfile}>Edit Profile</button>
            </div>
        
          );

};

export default CandidateProfilePage;

// function CandidateProfilePage() {

//   const candidate = useSelector(store => store.editCandidate);
//   const history = useHistory();

//   const dispatch = useDispatch();
//   useEffect(() => {
//       dispatch({
//           type: 'FETCH_EDIT_CANDIDATE'
//       });

//   }, []);

//   const onSubmit = (evt) => {
//       evt.preventDefault();

//       dispatch({
//           type: 'SAVE_CANDIDATE_DATA',
//           payload: candidate
//       });
//       history.push('/')
//   }

//   const handleClick = () => {

//       history.push('/')
//   }
//   // console.log('THE EMPLOYER INFO', employer);

//   return (
//       <Box>
//           <Button onClick={handleClick}>Back</Button>
//           Edit Profile

//           <form>
//               <TextField
//                   value={String(candidate.education)}
//                   onChange={(evt) => dispatch({
//                       type: 'UPDATE_EDIT_CANDIDATE',
//                       payload: { education: evt.target.value }
//                   })}
//               />
//               <TextField
//                   value={String(candidate.experience)}
//                   onChange={(evt) => dispatch({
//                       type: 'UPDATE_EDIT_EMPLOYER',
//                       payload: { expereincee: evt.target.value }
//                   })}
//               />
//               <TextField
//                   value={String(employer.company_phone)}
//                   onChange={(evt) => dispatch({
//                       type: 'UPDATE_EDIT_EMPLOYER',
//                       payload: { company_phone: evt.target.value }
//                   })}
//               />
//               <TextField
//                   value={String(employer.email)}
//                   onChange={(evt) => dispatch({
//                       type: 'UPDATE_EDIT_EMPLOYER',
//                       payload: { email: evt.target.value }
//                   })}
//               />
//               <TextField
//                   value={String(employer.company_link)}
//                   onChange={(evt) => dispatch({
//                       type: 'UPDATE_EDIT_EMPLOYER',
//                       payload: { company_link: evt.target.value }
//                   })}
//               />
//               <TextField
//                   value={String(employer.logo_path)}
//                   onChange={(evt) => dispatch({
//                       type: 'UPDATE_EDIT_EMPLOYER',
//                       payload: { logo_path: evt.target.value }
//                   })}
//               />
//               <TextField
//                   value={String(employer.company_description)}
//                   onChange={(evt) => dispatch({
//                       type: 'UPDATE_EDIT_EMPLOYER',
//                       payload: { company_description: evt.target.value }
//                   })}
//               />
//               <Button type='submit' variant="contained" onClick={onSubmit}>save</Button>
//           </form>
//       </Box>
//   );
// }

// export default CandidateProfilePage