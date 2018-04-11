import React, { Component } from 'react';
import { connect } from 'react-redux'
import Home from './Home';
import Profile from './Profile';
import Explore from './Explore';
import Tutorial from './Tutorial';

class Main extends Component {
    render() {
        let screen = this.props.screen;
        return (
            <div className="main">
                {screen === 'profile'
                    ? <Profile />
                    : screen === 'explore'
                        ? <Explore />
                        : screen === 'tutorial'
                            ? <Tutorial />
                            : <Home />
                }
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        screen: state.screen
    };
}

export default connect(mapStateToProps)(Main);
