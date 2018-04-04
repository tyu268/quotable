import React, { Component } from 'react';
import PhotoDisplay from '../components/PhotoDisplay';
import Navbar from './Navbar';
import '../css/Explore.css';
import clock from '../img/clock.png';
import grid from '../img/grid.png';

// temp photo arrays
let photos = [{img: clock, text: 'clock'}, {img: grid, text: 'grid'}];

class Profile extends Component {
    render() {
        return (
            <div>
                <PhotoDisplay photos={photos} />
                <Navbar state='explore' />
            </div>
        );
    }
}

export default Profile;
