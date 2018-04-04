import React, { Component } from 'react';
import PhotoDisplay from '../components/PhotoDisplay';
import Navbar from './Navbar';
import '../css/Explore.css';
import annenberg from '../img/annenberg.jpg';
import gate from '../img/gate.jpg';
import yard from '../img/yard.jpg';
import matthews from '../img/matthews.jpeg';
import adams from '../img/adams.jpg';
import square from '../img/square.jpg';
import manny from '../img/manny.jpg';
import housing from '../img/housing.jpg';
import housing2 from '../img/housing2.jpg';

// temp photo arrays
let photos = [{img: annenberg, text: 'annenberg'}, {img: gate, text: 'gate'}, {img: yard, text: 'yard'}, 
	{img: matthews, text: 'matthews'}, {img: adams, text: 'adams'}, {img: square, text: 'square'}, {img: manny, text: 'manny'}, 
	{img: housing, text: 'housing'}, {img: housing2, text: 'housing2'}];

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
