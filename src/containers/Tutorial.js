/*
 * TUTORIAL.JS
 *
 * Renders tutorial page
 */

import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import Animated from 'animated/lib/targets/react-dom';

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

const styles = {
	root: {
		background: '#000',
		padding: '0 10%',
	},
	slide: {
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		display: 'flex',
	},
	img: {
		width: '60%',
		display: 'block',
		margin: '0.5em 0',
	},
};

class Tutorial extends Component {
    constructor(props) {
		super(props);
		this.state = {
			index: 0,
			position: new Animated.Value(0),
		};
        this.handleClick = this.handleClick.bind(this);
	}

	handleChangeIndex = index => {
		this.setState({ index });
	};

	handleSwitch = (index, type) => {
		if (type === 'end') {
			Animated.spring(this.state.position, { toValue: index }).start();
			return;
		}
		this.state.position.setValue(index);
	};

    // Go to home screen
    handleClick(ev) {
        this.props.dispatch(changeScreen(ev.target.dataset.name));
    }
	
	render() {
		const { index, position } = this.state;

		return (
			<div className="tutorial-screen">
				<div className="tutorial-header">
					<img className="logo" src={logo} alt="Quotable Logo"/>
					<span>Welcome to Quotable!</span>
				</div>
				<p>Swipe through for a quick overview!</p>
				<SwipeableViews
					className="tutorial-slider"
					index={index}
					onChangeIndex={this.handleChangeIndex}
					onSwitching={this.handleSwitch}
				>	
					{tutorialImages.map((img, currentIndex) => {
						const inputRange = tutorialImages.map((_, i) => i);
						const scale = position.interpolate({
							inputRange,
							outputRange: inputRange.map(i => {
								return currentIndex === i ? 1 : 0.7;
							}),
						});
						const opacity = position.interpolate({
							inputRange,
							outputRange: inputRange.map(i => {
								return currentIndex === i ? 1 : 0.3;
							}),
						});
						const translateX = position.interpolate({
							inputRange,
							outputRange: inputRange.map(i => {
								return 100 / 2 * (i - currentIndex);
							}),
						});

					return (
					<Animated.div
						key={String(currentIndex)}
						style={Object.assign(
						{
							opacity,
							transform: [{ scale }, { translateX }],
						},
						styles.slide,
						)}
					>
						<img style={styles.img} src={img.img} alt={img.alt}/>
						<p>{img.text}</p>
					</Animated.div>
					);
				})}	
				</SwipeableViews>
				{index === 6 &&
				<button className="bigbutton" data-name='mood-picker' onClick={this.handleClick}>
	                    Start Using Quotable!
				</button>}
            </div>
		);
	}
}

export default connect()(Tutorial);