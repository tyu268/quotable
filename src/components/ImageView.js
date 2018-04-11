/*
 * IMAGEVIEW.JS
 *
 * Component for viewing single image
 */

import React, { Component } from 'react';
import '../css/ImageView.css';

class ImageView extends Component {
    render() {
        return (
            <img 
                className='image'
                src={this.props.image[0]} 
                alt={this.props.image[1]} 
                onClick={this.props.onClick}
            />
        );
    }
}

export default ImageView;
