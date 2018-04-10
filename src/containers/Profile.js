import React, { Component } from 'react';
import { connect } from 'react-redux'
import PhotoDisplay from '../components/PhotoDisplay';
import Navbar from './Navbar';
import '../css/index.css';
import '../css/Profile.css';

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
        const photos = this.props.photos;
        const wallpapers = this.props.wallpapers;
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

const mapStateToProps = (state) => {
    return {
        photos: JSON.parse(state.yourPhotos),
        wallpapers: JSON.parse(state.yourWallpapers)
    };
}

export default connect(mapStateToProps)(Profile);
