import React, { Component } from 'react';
import '../css/PhotoDisplay.css';

class PhotoDisplay extends Component {
    render() {
        let photos = this.props.photos;
        if (!photos.length) {
            return (
                <p>No photos to show!</p>
            );
        }
        let i = 0;
        return (
            <div>
            {this.props.photos.map(p => {
                return (<div key={i++}>
                    <img src={p.img} alt={p.text} />
                </div>);
            })}
            </div>
        );
    }
}

export default PhotoDisplay;
