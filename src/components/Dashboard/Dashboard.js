import React, { Component } from 'react';

export default class Dashboard extends Component {
    render() {
        return (
            <div className='App'>
                <div className='header'>
                
                </div>
                <a href='http://localhost:3030/auth/logout'><div className='logoutButton'>Logout</div></a>
            </div>
        )
    }
}