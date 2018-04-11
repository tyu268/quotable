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
			<h1> This is how u use qutoable bruv </h1>
			<ol>
				<li>make sure u sad boi</li>
				<li>SNAP DAT PHOT</li>
				<li>walpasdf</li>
			</ol>
			<button className="bigbutton end-tutorial" data-name='home' onClick={this.handleClick}>
                    Start Using Quotable
            </button>
            </div>
		);
	}
}

export default connect()(Tutorial);