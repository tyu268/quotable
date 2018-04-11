import React, { Component } from 'react';
import '../css/index.css';
import '../css/EmojiHistory.css';
import visualization from "../img/visualization.jpg"

class EmojiHistory extends Component {
    render() {
        return (
			<div className="visual">
				<img src= {visualization} />
			</div>
        );
    }
}

export default EmojiHistory;
