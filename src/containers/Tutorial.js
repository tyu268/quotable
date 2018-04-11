/*
 * TUTORIAL.JS
 *
 * Renders tutorial page
 */

import React, { Component } from 'react';
import { connect } from 'react-redux'
import { changeScreen } from '../actions'
import '../css/Tutorial.css';
import emojiscreen from "../img/emojiscreen.png";
import emojidisplay from "../img/emojidisplay.png";
import quotescreen from "../img/quotescreen.png";
import timescreen from "../img/timescreen.png";
import profilescreen from "../img/profilescreen.png";
import explorescreen from "../img/explorescreen.png";
import camerascreen from "../img/camerascreen.png";

class Tutorial extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    // Go to home screen
    handleClick(ev) {
        this.props.dispatch(changeScreen(ev.target.dataset.name));
    }
	
	render() {
		return (
			<div className="tutorial-screen">
			<h1> Let's start with a quick overview... </h1>
				<div classNam="tutorial-steps">
					<ol>
						<li>Choose how you’re feeling!</li>
							<img className="tutorial-image" src={emojiscreen} alt="Screen with list of emojis: happy, sad, angry, disgusted, pizza."/>
						<li>This is how you said you were feeling today! </li>
							<img className="tutorial-image" src={emojidisplay} alt="Emoji is displayed on top right home screen corner." />
						<li>This is your quote prompt!</li>
							<img className="tutorial-image" src={quotescreen} alt="Quote text is in center of home screen." />
						<li>This is how much time you have left to post.</li>
							<img className="tutorial-image" src={timescreen} alt="Clock with time left (e.g. X hours left!) is displayed underneath quote text." />
						<li>See and download your photos, wallpapers, and past emoji history here.</li>
							<img className="tutorial-image" src={profilescreen} alt="Icon with two photos in the bottom left corner of home screen."/>
						<li>This is what other people have been posting!</li>
							<img className="tutorial-image" src={explorescreen} alt="Icon with a grid of nine squares in the bottom right corner of home screen." />
						<li>Swipe up to take photos and get started!</li>
							<img className="tutorial-image" src={camerascreen} alt="Swipe up to access camera; icon located underneath time left in home screen." />

					</ol>
				</div>
			<button className="bigbutton end-tutorial" data-name='home' onClick={this.handleClick}>
                    Start Using Quotable!
            </button>
            </div>
		);
	}
}

export default connect()(Tutorial);