import React, {Component} from 'react';
import logo from '../../logo.png';
import './Login.css';

export default class Login extends Component {
    render() {
        return (
            <div className='App'>
                <div className='loginContainer'>
                    <img className='logo' src={logo}/>
                    <div className='siteName'>
                        <strong>Helo</strong>
                    </div>

                    <div className='loginButtonContainer'>
                        <a href={ process.env.REACT_APP_LOGIN}>
                        <div className='loginButton'>Login / Register</div></a> 
                    </div>
                </div>
            </div>
        )
    }
}