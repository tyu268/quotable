import React, { Component } from 'react';
import PhotoDisplay from '../components/PhotoDisplay';
import Navbar from './Navbar';
import '../css/Explore.css';
import annenberg from '../img/annenberg.jpg';
import gate from '../img/gate.jpg';
import yard from '../img/yard.jpg';
import matthews from '../img/matthews.jpeg';

// temp photo arrays
let photos = [{img: annenberg, text: 'annenberg'}, {img: gate, text: 'gate'}, {img: yard, text: 'yard'}, 
	{img: matthews, text: 'matthews'}];

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
