import { BoardState, BoardAction } from './types';
import { createReducer } from 'typesafe-actions';
import { ADD_COUNT } from './actions';

// 초기값 설정
const initialState: BoardState = { 
    id: 1,
    writer: 'qkrwlgh',
    wDate: '2020-11-06',
    wTitle: '게시글 첫번째 항목입니다. 두번째 칸까지 타이틀이 보입니다.',
    count: 0,
    commandCount: 0
};

const boards = createReducer<BoardState, BoardAction>(initialState, {
    [ADD_COUNT]: state => ({...state, count: state.count + 1 })
})

export default boards;