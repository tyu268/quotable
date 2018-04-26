/*
 * IMAGEVIEW.JS
 *
 * Component for viewing single image
 */

import React, { Component } from 'react';
import '../css/ImageView.css';

class ImageView extends Component {
    render() {
        const user = this.props.image[2];
        const margin = this.props.state === 'explore' ? '5.5em' : '3.2em';
        return (
            <div className="view-screen">
                <img 
                    className='image'
                    src={this.props.image[0]} 
                    alt={this.props.image[1]}
                    style={{marginTop: margin}} 
                />

                <div className="user-info">
                    <span>
                        {user.emoji}
                        <b className="username">{user.username}</b>
                        <em>({user.time})</em>
                    </span>
                </div>

                <button
                    className="download-button back-button"
                    style={{marginBottom: (this.props.state === 'explore' ? '5em' : '1em')}}
                    onClick={this.props.onClick}
                > 
                        BACK
                </button>

                {this.props.state === 'profile' &&
                <a href={this.props.image[0]} download="image.png">
                    <button className="download-button"> 
                        SAVE IMAGE
                    </button>
                </a>}

            </div>
        );
    }
}

export default ImageView;
