import React, {useEffect, useState} from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from './firebase';

const LogOut = () => {
    const [loggedOut, setLoggedOut] = useState(false);

    const signOut = () => {
        // // Confirm sign out
        // if (!window.confirm('Are you sure you want to leave? Your progress will be lost.')) {
        //     return;
        // }
        auth.signOut().then(() => {
            // LOGOUT SUCCESS
        });
    };

    return (
        <header>
            <div className="header">
                <div className="icon-container">
                    <button onClick={signOut} className="links">
                        Logout
                    </button>
                </div>
            </div>
        </header>
    );
};

export default LogOut;