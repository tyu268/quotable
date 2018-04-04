import React, { Component } from 'react';
import { connect } from 'react-redux'
import { changeScreen } from '../actions'
import '../css/Navbar.css';
import photo_img from '../img/photos.png';
import home from '../img/home.png';
import grid from '../img/grid.png';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(ev) {
        this.props.dispatch(changeScreen(ev.target.name));
    }

    render() {
        let screen = this.props.state;
        return (
            <div className='navbar'>
                <div className='navbar-icon' onClick={this.handleClick}>
                    <img
                        className={screen === 'profile' ? 'navbar-page' : ''}
                        name='profile'
                        src={photo_img}
                        alt='your profile' />
                </div>
                <div className='navbar-icon' name='home' onClick={this.handleClick}>
                    <img src={home} alt='home' name='home'/>
                </div>
                <div className='navbar-icon' name='explore' onClick={this.handleClick}>
                    <img
                        className={screen === 'explore' ? 'navbar-page' : ''}
                        name='explore'
                        src={grid}
                        alt='explore' />
                </div>
            </div>
        );
    }
}

export default connect()(Navbar)
