import React, { Component } from 'react';
import { connect } from 'react-redux'
import { changeScreen } from '../actions'
import '../css/Tutorial.css';

class Tutorial extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

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
							<img src="../img/emojiscreen.png"/>
						<li>This is how you said you were feeling today!</li>
							<img src="../img/emojidisplay.png"/>
						<li>This is your quote prompt!</li>
							<img src="../img/quotescreen.png"/>
						<li>This is how much time you have left to post.</li>
							<img src="../img/timescreen.png"/>
						<li>See your photos, wallpapers, and past emoji history here.</li>
							<img src="../img/profilescreen.png"/>
						<li>This is what other people have been posting!</li>
							<img src="../img/explorescreen.png"/>
						<li>Swipe up to take photos and get started!</li>
							<img src="../img/camerascreen.png"/>
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