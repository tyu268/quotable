import square from './img/square.jpg';
import hall from './img/hall.jpg';
import nw from './img/nw.jpg';
import students from './img/students.jpg';
import quincy from './img/quincy.jpg';
import bridge from './img/bridge.jpg';
import grad from './img/grad.jpg';
import adams from './img/adams.jpg';
import starrynight from './img/starrynight.png';
import tiger from './img/tiger.png';
import shell from './img/shell.png';
import annenberg from './img/annenberg.jpg';
import gate from './img/gate.jpg';
import yard from './img/yard.jpg';
import matthews from './img/matthews.jpeg';
import manny from './img/manny.jpg';
import housing from './img/housing.jpg';
import housing2 from './img/housing2.jpg';

// temp photo arrays
let photos_temp = [{img: square, text: 'square'}, {img: hall, text: 'hall'}, {img: nw, text: 'nw'}, 
    {img: students, text: 'students'}, {img: quincy, text: 'quincy'}, {img: bridge, text: 'bridge'}, 
    {img: grad, text: 'grad'}, {img: adams, text: 'adams'}];
let wallpapers_temp = [{img: starrynight, text: 'starrynight'}, {img: tiger, text: 'tiger'}, {img: shell, text: 'shell'}]
let explore_temp = [{img: annenberg, text: 'annenberg'}, {img: gate, text: 'gate'}, {img: yard, text: 'yard'}, 
	{img: matthews, text: 'matthews'}, {img: adams, text: 'adams'}, {img: square, text: 'square'}, {img: manny, text: 'manny'}, 
	{img: housing, text: 'housing'}, {img: housing2, text: 'housing2'}];

const initialState = {
    screen: 'home',
    yourPhotos: JSON.stringify(photos_temp),
    yourWallpapers: JSON.stringify(wallpapers_temp),
    explorePhotos: JSON.stringify(explore_temp)
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_SCREEN':
            console.log('changing screen! ' + action.screen);
            return Object.assign({}, state, {
                screen: action.screen
            });

        case 'ADD_PHOTO':
            let newImage = { img: action.src, text: action.text };
            const newState = { ...state }
            let photos = JSON.parse(newState.yourPhotos)
            let explore = JSON.parse(newState.explorePhotos)
            photos.splice(0, 0, newImage);
            explore.splice(0, 0, newImage);
            newState.yourPhotos = JSON.stringify(photos);
            newState.explorePhotos = JSON.stringify(explore);
            return newState;

        default:
            return state;
    }
}

export default reducer;
