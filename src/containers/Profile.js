import React, { Component } from 'react';
import PhotoDisplay from '../components/PhotoDisplay';
import Navbar from './Navbar';
import '../css/Profile.css';
import square from '../img/square.jpg';
import hall from '../img/hall.jpg';
import nw from '../img/nw.jpg';
import starrynight from '../img/starrynight.png';
import tiger from '../img/tiger.png';
import shell from '../img/shell.png';

// temp photo arrays
let photos = [{img: square, text: 'square'}, {img: hall, text: 'hall'}, {img: nw, text: 'nw'}];
let wallpapers = [{img: starrynight, text: 'starrynight'}, {img: tiger, text: 'tiger'}, {img: shell, text: 'shell'}]

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showWallpapers: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(ev) {
        if (ev.target.name === "photos") {
            this.setState(prevState => {
                return {showWallpapers: false};
            });
        } else {
            this.setState(prevState => {
                return {showWallpapers: true};
            });
        }
    }

    render() {
        return (
            <div>
                <div className='profile-header'>
                    <button name="photos" onClick={this.handleClick}>Your Photos</button>
                    <button name="wallpapers" onClick={this.handleClick}>Your Wallpapers</button>
                </div>
                <PhotoDisplay photos={this.state.showWallpapers ? wallpapers : photos} />
                <Navbar state='profile' />
            </div>
        );
    }
}

export default Profile;
