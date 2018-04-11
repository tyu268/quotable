import React, { Component } from 'react';
import '../css/index.css';
import '../css/PhotoQuoteView.css';

class PhotoQuoteView extends Component {
    render() {
        return (
            <div className="pq-view">
                <div className="pq-date">
                    {this.props.date}
                </div>
                <div className="pq-quote">
                    {this.props.quote}
                </div>
                <div className="pq-imgs">
                    <div className="pq-photo">
                        <img
                            src={this.props.photo.img}
                            alt={this.props.photo.text}
                            onClick={() => this.props.onClick(this.props.photo.img, this.props.photo.text)} />
                    </div>
                    <div className="pq-wallpaper">
                        <img
                            src={this.props.wallpaper.img}
                            alt={this.props.wallpaper.text}
                            onClick={() => this.props.onClick(this.props.wallpaper.img, this.props.wallpaper.text)} />
                    </div>
                </div>
            </div>
        );
    }
}

export default PhotoQuoteView;