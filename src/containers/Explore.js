/*
 * EXPLORE.JS
 *
 * Renders "explore" page.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PhotoDisplay from '../components/PhotoDisplay';
import Navbar from '../components/Navbar';
import '../css/index.css';
import '../css/Explore.css';

class Explore extends Component {
    render() {
        return (
            <div>
                <div className='explore-header'>
                    <h1 className='explore-header-text'>TODAY'S SUBMISSIONS:</h1>
                    Negative thoughts stick around because we believe them, not because we want or choose them.
                </div>
                <PhotoDisplay state='explore' photos={this.props.photos} />
                <Navbar state='explore' />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        photos: JSON.parse(state.explorePhotos)
    };
}

export default connect(mapStateToProps)(Explore);
