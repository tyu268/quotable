import React, { Component } from 'react';
import ImageView from './ImageView';
import '../css/PhotoDisplay.css';

class PhotoDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
          image: null,
        };
    }

    handleClick(img, txt, userInfo) {
        if (this.state.image) {
            this.setState({
              image: null,
            });
        }
        else {
            this.setState({
              image: [img, txt, userInfo],
            });
        }
       
    }

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
                {!this.state.image
                    ? <div>
                        <div id="photos">
                        {this.props.photos.map(p => {
                            return (<div className="photo-display" key={i++}>
                                <img src={p.img} alt={p.text} onClick={() => this.handleClick(p.img, p.text, p.user)}/>
                            </div>);
                        })}
                        </div>
                    </div>
                    : <ImageView state={this.props.state} image={this.state.image} onClick={() => this.handleClick(null, null, null)}/>
                }
            </div>
        );
    }
}

export default PhotoDisplay;
