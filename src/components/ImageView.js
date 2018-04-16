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
            <div>
                <img 
                    className='image'
                    src={this.props.image[0]} 
                    alt={this.props.image[1]} 
                    onClick={this.props.onClick}
                />

                <a href={this.props.image[0]} download="image.png">
                    <button className="download-button"> 
                        Save Image
                    </button>
                </a>

            </div>
        );
    }
}

export default ImageView;
