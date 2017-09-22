import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getUser } from '../../ducks/users'


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
            <div className='App'>
                <div className='header'>
                
                </div>
                <a href='http://localhost:3030/auth/logout'><div className='logoutButton'>Logout</div></a>
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