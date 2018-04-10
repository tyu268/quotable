import React, { Component } from 'react';
import Webcam from 'react-webcam';
import { connect } from 'react-redux'
import { changeScreen, addPhoto } from '../actions'
import QuoteModal from './QuoteModal';
import MoodPicker from '../components/MoodPicker';
import '../css/Home.css';
import camera_button from '../img/camera_button.png';
import arrow_right from '../img/arrow-right.png';
import arrow_down from '../img/arrow-down.png';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show_quote: true,
            cur_picture: null
        };
        this.setRef = this.setRef.bind(this);
        this.handleArrowClick = this.handleArrowClick.bind(this);
        this.handleCameraClick = this.handleCameraClick.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleContinue = this.handleContinue.bind(this);
    }

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
                                        <button className="arrow-btn" onClick={this.handleContinue}>
                                            <img className="arrow-btn-img" src={arrow_right} alt="next" />
                                        </button>
                                    </div>
                                    <div className="photo-footer">
                                        <MoodPicker />
                                    </div>
                                  </div>
                            }
                        </div>
                    </div>}
            </div>
        );
    }
}

export default connect()(Home);
