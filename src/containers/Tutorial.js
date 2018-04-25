/*
 * TUTORIAL.JS
 *
 * Renders tutorial page
 */

import React, { Component } from 'react';
import Slider from 'react-slick';
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

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
import logo from "../img/logo.png";

const tutorialImages = [
	{
		text: "Choose how you're feeling today!",
		img: emojiscreen,
		alt: "Screen with list of emojis: happy, sad, angry, disgusted, pizza.",
	},
	{
		text: "This is how you said you were feeling today! Tap on it to change.",
		img: emojidisplay,
		alt: "Emoji is displayed on top right home screen corner.",
	},
	{
		text: "Take a photo inspired by the quote! We'll combine everyone's photos to make a cool wallpaper at the end of the day!",
		img: quotescreen,
		alt: "Quote text is in center of home screen.",
	},
	{
		text: "This is how much time you have left to post.",
		img: timescreen,
		alt: "Clock with time left (e.g. X hours left!) is displayed underneath quote text.",
	},
	{
		text: "See your photos, wallpapers, and past mood history here. Click on a photo to view and download!",
		img: profilescreen,
		alt: "Icon with two photos in the bottom left corner of home screen."
	},
	{
		text: "See what other people have been posting!",
		img: explorescreen,
		alt: "Icon with a grid of nine squares in the bottom right corner of home screen.",
	},
	{
		text: "Swipe up to launch the camera and get started!",
		img: camerascreen,
		alt: "Swipe up to access camera; icon located underneath time left in home screen.",
	}
];

class Tutorial extends Component {
    constructor(props) {
		super(props);
		this.state = {
			index: 0
		};
        this.handleClick = this.handleClick.bind(this);
	}

    // Go to home screen
    handleClick(ev) {
        this.props.dispatch(changeScreen(ev.target.dataset.name));
    }
	
	render() {
		const { index } = this.state;
		const settings = {
			arrows: true,
			dots: true,
			infinite: false,
			afterChange: index => this.setState({ index })
		};

		return (
			<div className="tutorial-screen" style={{height: window.innerHeight}}>
				<div className="tutorial-header">
					<img className="logo" src={logo} alt="Quotable Logo"/>
					<span>Welcome to Quotable!</span>
				</div>
				<p>Swipe through for a quick overview >></p>
				<Slider {...settings}>
					{tutorialImages.map(item => {
						return (
							<div>
								<img className="tutorial-image" src={item.img} alt={item.alt}/>
								<p>{item.text}</p>
							</div>
						);
					})}
				</Slider>
				{index === 6 &&
				<button className="bigbutton" data-name='mood-picker' onClick={this.handleClick}>
	                    Start Using Quotable!
				</button>}
            </div>
		);
	}
}

export default connect()(Tutorial);