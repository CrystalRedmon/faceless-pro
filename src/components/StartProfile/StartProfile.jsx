import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import {useSelector} from 'react-redux';


function StartProfile(){
    const [profile, setProfile] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const getProfile = (evt) => {
        evt.preventDefault();
        console.log('inside Profile', profile)
        // dispatch({
        //     type: 'GET_PROFILE',
        //     payload: profile
        // })
        history.push('/user');
    }

    return(
        <>
        <h1>Welcome To Faceless Pro!</h1>
        <p>Let’s get you a job! First, create a profile to show employers how great you are.</p>
        <div class="flex-parent jc-center">
  <button type="submit" onClick={getProfile}>Continue</button>
</div> 
        </>
    )
}

export default StartProfile;