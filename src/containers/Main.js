/*
 * MAIN.JS
 *
 * Framework for one-page app in React. 
 * Handles switching between main "screens" of the app.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux'
import Home from './Home';
import Profile from './Profile';
import Explore from './Explore';
import Tutorial from './Tutorial';

import SwipeableViews from 'react-swipeable-views';

// Swipeable View Styles
const styles = {
  slideContainer: {
    height: window.innerHeight,
    WebkitOverflowScrolling: 'touch'
  },
  slide: {
    minHeight: 100,
    color: '#fff',
  },
  slide1: {
    height: window.innerHeight
  },
  slide2: {
    height: window.innerHeight
  },
  scroll: {
    height: 100,
    overflow: 'scroll',
  },
  slide3: {
    height: window.innerHeight
  },
};

class Main extends Component {
    render() {
        let screen = this.props.screen;

        // Render correct screen
        return (
            <div className="main">
                {screen === 'tutorial'
                    ? <Tutorial />
                    : <SwipeableViews>
                    <div style={Object.assign({}, styles.slide, styles.slide1)}>
                      <Home />
                    </div>
                    <div style={Object.assign({}, styles.slide, styles.slide2)}>
                      <Explore />
                    </div>
                    <div style={Object.assign({}, styles.slide, styles.slide3)}>
                      <Profile />
                    </div>
                   </SwipeableViews>
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
