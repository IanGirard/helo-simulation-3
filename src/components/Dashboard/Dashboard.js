import React, { Component } from 'react';
import './Dashboard.css';
import homeLogo from '../../home.png';
import searchLogo from '../../search.png';

export default class Dashboard extends Component {
    render() {
        return (
            <div className='DashboardApp'>
                <div className='header'>
                    <div className='heloText'>
                        <strong>Helo</strong>
                        <a href='http://localhost:3000/#/dashboard'>
                        <img className='homeLogo' src={homeLogo}/>
                        </a>
                        <img className='search' src={searchLogo}/>

                        <div className='dashboardHeaderText'>
                        </div>
                            <strong>Dashboard</strong>
                            <a href='http://localhost:3030/auth/logout'>
                                <div className='logoutButton'>
                                    Logout
                                </div>
                            </a>
                    </div>
                </div>
            </div>
        )
    }
}