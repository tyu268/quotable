import React, { Component } from 'react';
import '../css/MoodPicker.css';

class MoodPicker extends Component {
     constructor(props) {
        super(props);
        this.state = {
            expand: false,
            selected: ['😶', 'neutral'],
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

    toggleExpand(new_emotion) {
        // toggle expanded state
        this.setState(prevState => {
            return {
                expand: !prevState.expand,
                selected: new_emotion,
            };
        });

        // new emotion assigned
        if (new_emotion) {
            this.setState(prevState => {
                return {};
            });
        } 
    }

    render() {
        return (
                <div className='mood-picker'>
                    {this.state.expand

                        ? // Expanded picker
                            <div className='mood-expanded'>
                                <h1> How are you feeling today? </h1>
                                {/* emotion list */}
                                {
                                    this.state.emotions.map(emotion => {
                                        return (
                                            <button className='mood-btn' onClick={() => this.toggleExpand(emotion)}>
                                                <span role="img" aria-label={emotion[1]}>{emotion[0]}</span>
                                            </button>
                                        );
                                    })
                                }
                            </div>
                        
                        : // closed picker
                            <button className='mood-btn' onClick={() => this.toggleExpand(this.state.selected)}>
                                <span role="img" aria-label={this.state.selected[1]}>{this.state.selected[0]}</span>
                            </button>
                    }
                </div>

            
        );
    }
}

export default MoodPicker;
