/*
 * HOME.JS
 *
 * Renders home page and implements camera functionality. 
 */

import React, { Component } from 'react';
import Webcam from 'react-webcam';
import { connect } from 'react-redux'
import { changeScreen, addPhoto } from '../actions'
import QuoteModal from './QuoteModal';
import '../css/index.css';
import '../css/Home.css';
import camera_button from '../img/camera_button.png';
import checkmark from '../img/checkmark.png';
import arrow_down from '../img/arrow-down.png';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show_quote: true,
            cur_picture: null,
            confirm: false
        };
        this.setRef = this.setRef.bind(this);
        this.handleArrowClick = this.handleArrowClick.bind(this);
        this.handleCameraClick = this.handleCameraClick.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleConfirm = this.handleConfirm.bind(this);
        this.handleContinue = this.handleContinue.bind(this);
    }

    // Setup for webcam access
    setRef(webcam) {
        this.webcam = webcam;
    }

    // Switch from quote to camera
    handleArrowClick() {
        this.setState(prevState => {
            return {show_quote: !prevState.show_quote};
        });
    }

    // Take photo
    handleCameraClick() {
        const imageSrc = this.webcam.getScreenshot();
        this.setState(prevState => {
            return { cur_picture: imageSrc };
        });
    }

    // Cancel current photo
    handleCancel() {
        this.setState(prevState => {
            return {cur_picture: null};
        });
    }

    // Prompt user to confirm photo
    handleConfirm() {
        this.setState(prevState => {
            return {confirm: !this.state.confirm};
        })
    }

    // Save confirmed photo, continue to explore screen
    handleContinue() {
        this.props.dispatch(addPhoto(this.state.cur_picture, 'new picture'));
        this.props.dispatch(changeScreen('explore'));
    }

    render() {
        return (
            <div className="home">
                {this.state.cur_picture
                    ? <div className="image-view">
                        <img src={this.state.cur_picture} alt="current"/>
                    </div>
                    : this.props.today
                        ? <div className="image-view">
                            <img src={this.props.today.img.img} alt={this.props.today.img.text} />
                        </div>
                        : <Webcam
                            className="image-view"
                            audio={false}
                            ref={this.setRef}
                            screenshotFormat="image/jpeg"/>}

                {this.state.show_quote

                    /* Quote */
                    ? <QuoteModal handleClick={this.handleArrowClick} />

                    /* Camera */
                    : <div>

                        {/* Return to quote arrow */}
                        <button className="return-btn">
                            <img 
                                className="return-btn-img"
                                onClick={this.handleArrowClick} 
                                src={arrow_down}
                                alt="back to quote" />
                        </button>

                        <div className="home-btns">
                            {!this.state.cur_picture

                                /* Camera Button */
                                ? <img className="camera-btn" src={camera_button} alt="camera" onClick={this.handleCameraClick} />

                                /* Photo Taken */
                                : <div className="photo-screen">
                                    <div className="photo-header">
                                        <button className="cancel-btn" onClick={this.handleCancel}>X</button>
                                        <button className="arrow-btn" onClick={this.handleConfirm}>
                                            <img className="arrow-btn-img" src={checkmark} alt="confirm" />
                                        </button>
                                    </div>
                                    <div className="photo-footer">
                                    </div>
                                  </div>
                            }
                        </div>

                        {
                            // Modal to confirm photo as submission
                            this.state.confirm &&
                            <div className="modal-confirm">
                                <div className="modal-confirm-content">
                                    <h6>Confirm submission?</h6>
                                    <p>You will not be able to submit another photo for the day.</p>
                                    <div className="modal-confirm-btns">
                                        <button
                                            className="modal-confirm-btn-ok"
                                            onClick={this.handleContinue}>
                                            OK
                                        </button>
                                        <button
                                            className="modal-confirm-btn-cancel"
                                            onClick={this.handleConfirm}>
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        today: state.curPic
    };
}

export default connect(mapStateToProps)(Home);
