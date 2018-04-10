import React, { Component } from 'react';
import { connect } from 'react-redux';
import PhotoDisplay from '../components/PhotoDisplay';
import Navbar from './Navbar';
import '../css/index.css';
import '../css/Explore.css';

class Explore extends Component {
    render() {
        return (
            <div>
                <h1 className='explore-header'>All Recent Submissions</h1>
                <PhotoDisplay photos={this.props.photos} />
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
