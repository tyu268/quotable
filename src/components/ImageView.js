/*
 * IMAGEVIEW.JS
 *
 * Component for viewing single image
 */

import React, { Component } from 'react';
import '../css/ImageView.css';

class ImageView extends Component {

    download() {
        var fileDownload = require('js-file-download');
        fileDownload('imagine this is your wallpaper being saved', 'wallpaper.txt');
    }

    render() {
        return (
            <div>
                <img 
                    className='image'
                    src={this.props.image[0]} 
                    alt={this.props.image[1]} 
                    onClick={this.props.onClick}
                />

                <button 
                    onClick={this.download}
                    className="bigbutton download-button"
                > 
                    Save as Wallpaper 
                </button>

            </div>
        );
    }
}

export default ImageView;
