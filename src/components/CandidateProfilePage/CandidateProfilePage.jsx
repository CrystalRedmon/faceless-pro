// import React from 'react';
// import axios from 'axios';

// import { useSelector } from 'react-redux';
// import { useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import { useDispatch } from 'react-redux';


// function CandidateProfilePage(){
//   const candidate = useSelector(store => store.editCandidate);
//   const history = useHistory();

//   const dispatch = useDispatch();
//   useEffect(() => {
//       dispatch({
//           type: 'FETCH_EDIT_CANDIDATE'
//       });

//   }, []);

//   const onSubmit = (evt) => {
//     evt.preventDefault();

//     dispatch({
//         type: 'SAVE_CANDIDATE_DATA',
//         payload: candidate
//     });
//     history.push('/user');
// };



// return (

//   <Box>

//   <Grid container spacing={2}>
//       <Grid item xs={3}></Grid>
//       <Grid item xs={8}>
 
//           <h1>
//               Edit Your Profile
              
//           </h1>



//           <form>
//               <Grid
//                   container
//                   rowSpacing={5}
//                   justify="flex-end"
//                   alignItems="center">
//                   <Grid item xs={6}>
//                       <TextField
//                           label="First Name"
//                           value={String(candidate.user_info.first_name)}
//                           onChange={(evt) => dispatch({
//                               type: 'UPDATE_EDIT_CANDIDATE',
//                               payload: { first_name: evt.target.value }
//                           })}
//                       />
//                   </Grid>

//                   <Grid item xs={6}>

//                       <TextField
//                           label="Last Name"
//                           value={String(candidate.user_info.last_name)}
//                           onChange={(evt) => dispatch({
//                               type: 'UPDATE_EDIT_CANDIDATE',
//                               payload: { last_name: evt.target.value }
//                           })}
//                       />
//                   </Grid>

//                   <Grid item xs={6}>
//                       <TextField
//                           label="Email"
//                           value={String(candidate.user_info.email)}
//                           onChange={(evt) => dispatch({
//                               type: 'UPDATE_EDIT_CANDIDATE',
//                               payload: { email: evt.target.value }
//                           })}
//                       />
//                   </Grid>

//                   <Grid item xs={6}>
//                       <TextField
//                           label="LinkedIn"
//                           value={String(candidate.user_info.linkedin_link)}
//                           onChange={(evt) => dispatch({
//                               type: 'UPDATE_EDIT_CANDIDATE',
//                               payload: { linkedin_link: evt.target.value }
//                           })}
//                       />
//                   </Grid>
//                   <Grid item xs={6}>
//                       <TextField
//                           label="Resume"
//                           value={String(candidate.user_info.resume_path)}
//                           onChange={(evt) => dispatch({
//                               type: 'UPDATE_EDIT_CANDIDATE',
//                               payload: { resume_path: evt.target.value }
//                           })}
//                       />
//                   </Grid>
//                   <Grid item xs={6}>
//                       <TextField
//                           label="Cover Letter"
//                           value={String(candidate.user_info.cover_letter_path)}
//                           onChange={(evt) => dispatch({
//                               type: 'UPDATE_EDIT_CANDIDATE',
//                               payload: { cover_letter_path: evt.target.value }
//                           })}
//                       />
//                   </Grid>

//                   <Button type='submit' variant="contained" onClick={onSubmit} sx={{ marginTop: 5 }}>Save</Button>
//               </Grid>
//           </form>
//       </Grid>
//       <Grid item xs={3}></Grid>
//   </Grid>
// </Box>


//   const onBack = () => {

//     history.push('/user')
// }
//          {/* <Link variant='contained' onClick={onBack}>Back</Link> */}

//   <div className="container">
//   <h4>Profile</h4>

       
        
        
              
//               <p>Education: </p>
//               <p> 
//                 Experience: 
//             </p>
        
//               <p> Skills:</p>
          
//             <button>Edit Profile</button>
//             </div>
        
//           )

// };

// export default CandidateProfilePage;