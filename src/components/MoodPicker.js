import React, { Component } from 'react';
import '../css/MoodPicker.css';

class MoodPicker extends Component {
    render() {
        return (
            <div>
                <button className='mood-btn'>😀</button>
                <button className='mood-btn'>😞</button>
                <button className='mood-btn'>😡</button>
                <button className='mood-btn'>😱</button>
                <button className='mood-btn'>🤢</button>
                <button className='mood-btn'>🍕</button>
            </div>
        );
    }
}

export default MoodPicker;
