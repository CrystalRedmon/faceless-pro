import React from 'react';
import { useHistory } from 'react-router-dom';

function StartProfile() {
    const history = useHistory();

    const getProfile = (evt) => {
        evt.preventDefault();
        // dispatch({
        //     type: 'GET_PROFILE',
        //     payload: profile
        // })
        history.push('/user');
    }

    // NOT USED IN APP
    return (
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