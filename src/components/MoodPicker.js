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
                <div>
                    {this.state.expand
                        ? // Expanded picker
                            <div>
                                {
                                    this.state.emotions.map(emotion => {
                                        return (
                                            <button className='mood-btn' onClick={() => this.toggleExpand(emotion)}>
                                                <span role="img" aria-label={emotion[1]}>{emotion[0]}</span>
                                            </button>
                                        );
                                    })
                                }
                                <button className='mood-btn' onClick={() => this.toggleExpand(this.state.selected)}>
                                    X
                                </button>
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

export default MoodPicker;
