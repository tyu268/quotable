const initialState = {
    screen: 'home',
    yourPhotos: [],
    yourWallpapers: [],
    explorePhotos: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_SCREEN':
            console.log('changing screen! ' + action.screen);
            return Object.assign({}, state, {
                screen: action.screen
            });

        default:
            return state;
    }
}

export default reducer;
