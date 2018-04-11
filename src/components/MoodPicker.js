/*
 * MOODPICKER.JS
 *
 * Component for selecting today's mood
 */

import React, { Component } from 'react';
import '../css/MoodPicker.css';

import { connect } from 'react-redux'
import { changeMood } from '../actions'

class MoodPicker extends Component {
     constructor(props) {
        super(props);

        // Set state based on stored emotion 
        let expand_value = true;
        let selected_value = ['😄', 'happy'];
        if (props.mood) {
            selected_value = props.mood;
            expand_value = false;
        }
        this.state = {
            expand: expand_value,
            selected: selected_value,
            emotions: [
                ['😄', 'happy'],
                ['😞', 'sad'],
                ['😡', 'angry'],
                ['🤢', 'disgusted'],
                ['🍕', 'pizza'],
            ],
        };
        this.toggleExpand = this.toggleExpand.bind(this)
    }

    // Toggle expanded/closed picker
    toggleExpand(new_emotion) {
        this.setState(prevState => {
            return {
                expand: !prevState.expand,
                selected: new_emotion,
            };
        });

        this.props.dispatch(changeMood(new_emotion));
    }

    render() {
        return (
                <div className='mood-picker'>
                    {this.state.expand

                        ? // Expanded picker
                            <div className='mood-expanded'>
                                <h1> How are you feeling today? </h1>
                                {/* Emotion list */}
                                {
                                    this.state.emotions.map(emotion => {
                                        return (
                                            <button key={emotion[1]} className='mood-btn' onClick={() => this.toggleExpand(emotion)}>
                                                <span role="img" aria-label={emotion[1]}>{emotion[0]}</span>
                                            </button>
                                        );
                                    })
                                }
                            </div>
                        
                        : // Closed picker
                            <button className='mood-btn' onClick={() => this.toggleExpand(this.state.selected)}>
                                <span role="img" aria-label={this.state.selected[1]}>{this.state.selected[0]}</span>
                            </button>
                    }
                </div>

            
        );
    }
}

const mapStateToProps = (state) => {
    return {
        mood: state.mood
    };
}

export default connect(mapStateToProps)(MoodPicker)
