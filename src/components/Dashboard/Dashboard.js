import React, { Component } from 'react';

export default class Dashboard extends Component {
    render() {
        return (
            <div className='App'>
                This is the Dashboard
                <a href='http://localhost:3030/auth/logout'><div className='logoutButton'>Logout</div></a>
            </div>
        )
    }
}