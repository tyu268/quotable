import React, { Component } from 'react';
import PhotoDisplay from '../components/PhotoDisplay';
import Navbar from './Navbar';
import '../css/Profile.css';
import square from '../img/square.jpg';
import hall from '../img/hall.jpg';
import nw from '../img/nw.jpg';
import students from '../img/students.jpg';
import quincy from '../img/quincy.jpg';
import bridge from '../img/bridge.jpg';
import grad from '../img/grad.jpg';
import adams from '../img/adams.jpg';
import starrynight from '../img/starrynight.png';
import tiger from '../img/tiger.png';
import shell from '../img/shell.png';

// temp photo arrays
let photos = [{img: square, text: 'square'}, {img: hall, text: 'hall'}, {img: nw, text: 'nw'}, 
    {img: students, text: 'students'}, {img: quincy, text: 'quincy'}, {img: bridge, text: 'bridge'}, 
    {img: grad, text: 'grad'}, {img: adams, text: 'adams'}];
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
                    <button name="photos" className="photos" onClick={this.handleClick}>YOUR PHOTOS</button>
                    <button name="wallpapers" className="wallpapers" onClick={this.handleClick}>YOUR WALLPAPERS</button>
                </div>
                <PhotoDisplay photos={this.state.showWallpapers ? wallpapers : photos} />
                <Navbar state='profile' />
            </div>
        );
    }
}

export default Profile;
