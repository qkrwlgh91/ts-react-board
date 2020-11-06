import { combineReducers } from 'redux';
import boards from './boards';
import commands from './commands';

const rootReducer = combineReducers({
    boards,
    commands
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;