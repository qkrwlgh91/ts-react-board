import { CommandState} from './types';
import { createReducer } from 'typesafe-actions';
import { REMOVE_COMMAND } from './actions';

// 초기값 설정
const initialState: CommandState = [
    { 
        id: 1,
        cWriter: 'qkrwlgh',
        cDate: '2020-11-07',
        cContent: '글 내용이 너무 좋네요. 좋은글 감사합니다.'
    },
    { 
        id: 2,
        cWriter: 'eotrmfrk',
        cDate: '2020-11-07',
        cContent: '글 내용이 너무 좋네요. 좋은글 감사합니다. 하지만 글이 좀 짧은 것 같아요'
    },
    { 
        id: 3,
        cWriter: 'noneple',
        cDate: '2020-11-08',
        cContent: '무플방지회'
    },
];

const commands = createReducer<CommandState>(initialState, {
    [REMOVE_COMMAND]: (state, {payload: id}) => state.filter(command => command.id !== id)
});

export default commands;