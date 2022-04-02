import {combineReducer} from 'redux';
import GameOanTuXiReducer from './GameOanTuXiReducer';


const rootReducer = combineReducer( {
    stateGame: GameOanTuXiReducer
}
) 

export default rootReducer;