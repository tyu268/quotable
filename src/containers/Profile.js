import React, { Component } from 'react';
import PhotoDisplay from '../components/PhotoDisplay';
import Navbar from './Navbar';
import '../css/Profile.css';
import clock from '../img/clock.png';
import grid from '../img/grid.png';

// temp photo arrays
let photos = [{img: clock, text: 'clock'}, {img: grid, text: 'grid'}];
let wallpapers = [{img: grid, text: 'grid'}]

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
