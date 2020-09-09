import { combineReducers } from 'redux';

const defaultState = {
    started: false,
    completed: false,
    progress: 0,
    time: 0
}

const game = (state = defaultState, action) => {
    switch (action.type) {
        case 'START_GAME':
            return {...state, started: true}
        default:
            return state
    }
}

const rootReducer = combineReducers({
    game,
})
  
export default rootReducer;