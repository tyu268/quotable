import React, { Component } from 'react';
import { connect } from 'react-redux'
import { changeScreen } from '../actions'
import MoodPicker from '../components/MoodPicker';
import '../css/QuoteModal.css';
import clock from '../img/clock.png';
import photo_img from '../img/photos.png';
import arrow_up from '../img/arrow-up.png';
import grid from '../img/grid.png';

class QuoteModal extends Component {
    constructor(props) {
        super(props);
        this.handleScreenClick = this.handleScreenClick.bind(this);
        this.handleCameraClick = this.handleCameraClick.bind(this);
    }

    handleScreenClick(ev) {
        this.props.dispatch(changeScreen(ev.target.name));
    }

    handleCameraClick() {
        this.props.handleClick();
    }

    render() {
        return (
            <div>
                <div className="quote-modal">
                    <div className="quote-text">
                        Negative thoughts stick around because we believe them, not because we want or choose them.
                    </div>
                    <div className="time">
                        <img className="time-img" src={clock} alt="time left" />
                        <div className="time-text">
                            5 hours left!
                        </div>
                    </div>
                    <div className="footer">
                        <div className="footer-ctr">
                            <img
                                name='profile'
                                className="footer-img-photo"
                                src={photo_img}
                                alt="your profile"
                                onClick={this.handleScreenClick} />
                        </div>
                        <div className="footer-ctr">
                            <img
                                className="footer-img-arrow"
                                src={arrow_up}
                                alt="camera"
                                onClick={this.handleCameraClick} />
                        </div>
                        <div className="footer-ctr">
                            <img 
                                name='explore'
                                className="footer-img-grid"
                                src={grid}
                                alt="explore"
                                onClick={this.handleScreenClick} />
                        </div>
                    </div>
                </div>
                <MoodPicker />
            </div>
        );
    }
}

export default connect()(QuoteModal);
