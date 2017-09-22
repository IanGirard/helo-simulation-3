import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getUser } from '../../ducks/users'
import './Dashboard.css';
import homeLogo from '../../home.png';
import searchLogo from '../../search.png';


class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state= {
            user: {}
        }
    }
    componentDidMount() {
        this.props.getUser()
    }
    


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

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { getUser })(DashBoard)