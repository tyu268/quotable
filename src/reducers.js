import square from './img/square.jpg';
import hall from './img/hall.jpg';
import students from './img/students.jpg';
import adams from './img/adams.jpg';
import starrynight from './img/starrynight.png';
import tiger from './img/tiger.png';
import annenberg from './img/annenberg.jpg';
import gate from './img/gate.jpg';
import yard from './img/yard.jpg';
import matthews from './img/matthews.jpeg';
import manny from './img/manny.jpg';
import housing from './img/housing.jpg';
import housing2 from './img/housing2.jpg';
import placeholder from './img/image-placeholder.png';

// temp photo arrays
const explore_temp = [{img: annenberg, text: 'annenberg'}, {img: gate, text: 'gate'}, {img: yard, text: 'yard'}, 
	{img: matthews, text: 'matthews'}, {img: adams, text: 'adams'}, {img: square, text: 'square'}, {img: manny, text: 'manny'}, 
    {img: housing, text: 'housing'}, {img: housing2, text: 'housing2'}];
const profileTemp = [
{
    img: {img: square, text: 'square'},
    wallpaper: {img: starrynight, text: 'starrynight'},
    date: 'March 3, 2018',
    quote: 'Go outside and take a breath'
},
{
    img: {img: hall, text: 'hall'},
    wallpaper: {img: tiger, text: 'tiger'},
    date: 'March 2, 2018',
    quote: 'Lorem ipsum whoo'
},
{
    img: {img: students, text: 'students'},
    wallpaper: {img: annenberg, text: 'annenberg'},
    date: 'March 1, 2018',
    quote: 'lorem ipsum this is a quote'
}]

const initialState = {
    screen: 'tutorial',
    curPic: null,
    profileHistory: JSON.stringify(profileTemp),
    explorePhotos: JSON.stringify(explore_temp),
    mood: null,
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_SCREEN':
            return Object.assign({}, state, {
                screen: action.screen
            });

        case 'ADD_PHOTO':
            const newProfileImage = {
                img: {img: action.src, text: action.text},
                wallpaper: {img: placeholder, text: "wallpaper"},
                date: "April 10, 2018",
                quote: "Negative thoughts stick around because we believe them, not because we want or choose them."
            };
            const newState = Object.assign({}, state, {
                curPic: newProfileImage
            });
            let profile = JSON.parse(newState.profileHistory);
            profile.splice(0, 0, newProfileImage);
            newState.profileHistory = JSON.stringify(profile);
            return newState;

        case 'CHANGE_MOOD':
            return Object.assign({}, state, {
                mood: action.mood
            });

        default:
            return state;
    }
}

export default reducer;
