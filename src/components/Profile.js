import React, { useState, useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';

import Logout from './Logout';

const Profile = () => { 
    const { authState, authService } = useOktaAuth();
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        if (!authState.isAuthenticated) {
            setUserInfo(null);
        } else {
            console.log(authState)
            authService.getUser().then((info) => {
                console.log(info)
                setUserInfo(info);
        });
        }
    }, [authState, authService]);
  
    return (
        <div>
        { userInfo && 
            <div>
            <p>Welcome back, {userInfo.name}!</p>
            <p></p>
            </div>
        }
        {authState.isAuthenticated && <Logout />}
        </div>
    );
};

export default Profile;