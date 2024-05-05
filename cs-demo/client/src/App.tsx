import React from 'react';

import './App.css'; // Ensure CSS is imported
import ListOfUsers from './components/ListOfUsers';
import CreateUser from './components/CreateUser';
import UpdatePassword from './components/UpdatePassword';

function MainComponent() {
    return (
        <div className="layoutContainer">
            <ListOfUsers />
            <div>
                <CreateUser />
                <UpdatePassword />
            </div>
        </div>
    );
}

export default MainComponent;