/*
 * PROFILE.JS
 *
 * Renders user profile page.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux'
import PhotoQuoteView from '../components/PhotoQuoteView';
import ImageView from '../components/ImageView';
import EmojiHistory from '../components/EmojiHistory';
import Navbar from '../components/Navbar';
import '../css/index.css';
import '../css/Profile.css';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photoView: true,
            image: null
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleImageClick = this.handleImageClick.bind(this);
    }

    handleClick(ev) {
        if (ev.target.dataset.name === "photos") {
            this.setState(prevState => {
                return { photoView: true, image: null };
            });
        } else {
            this.setState(prevState => {
                return { photoView: false };
            });
        }
    }

    handleImageClick(img, text) {
        if (this.state.image) {
            this.setState(prevState => {
                return { image: null };
            });
        } else {
            this.setState(prevState => {
                return { image: [img, text] };
            });
        }
    }

    render() {
        let i = 1;
        return (
            <div>
                <div className='profile-header'>
                    <button data-name="photos" onClick={this.handleClick}>PHOTO HISTORY</button>
                    <button data-name="emoji" onClick={this.handleClick}>MOOD HISTORY</button>
                </div>
                {this.state.photoView
                    ? !this.state.image
                        ? <div className='photo-views'>
                            {this.props.profileHistory.map(p => {
                                return (<PhotoQuoteView
                                    key={i++}
                                    date={p.date}
                                    quote={p.quote}
                                    photo={p.img}
                                    wallpaper={p.wallpaper}
                                    mood={p.mood}
                                    onClick={this.handleImageClick} />);
                            })}
                        </div>
                        : <ImageView image={this.state.image} onClick={() => this.handleImageClick(null, null)}/>
                    : <EmojiHistory />
                }
                <Navbar state='profile' />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        profileHistory: JSON.parse(state.profileHistory)
    };
}

export default connect(mapStateToProps)(Profile);
