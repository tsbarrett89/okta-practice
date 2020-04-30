import React from 'react'
import { useOktaAuth } from '@okta/okta-react'

const Logout = () => {
    const { authService } = useOktaAuth();

    const logout = async () => {
        authService.logout('/')
    }

    return (
        <button onClick={logout}>Log Out</button>
    )
}

export default Logout