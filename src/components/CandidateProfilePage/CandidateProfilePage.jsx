
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
