import { combineReducers } from 'redux';
import boards from './boards';
import commands from './commands';
import users from './users';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
    boards,
    commands,
    users
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
    // yield all();
}