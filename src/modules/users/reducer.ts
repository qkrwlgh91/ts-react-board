import { UserState, UserAction } from './types';
import { createReducer } from 'typesafe-actions';
import { ADD_USER } from './actions';

// 초기값 설정
const initialState: UserState = [
    {
        id: 1,
        userId: 'qkrwlgh',
        userPw: 'qkrwlgh',
        userPwC: 'qkrwlgh',
        userEmail: 'qkr@ji.ho',
        userJoinDate: '2020-11-08'
    },
    {
        id: 2,
        userId: 'kimsy90',
        userPw: 'kimsy90',
        userPwC: 'kimsy90',
        userEmail: 'kimsy90@ji.ho',
        userJoinDate: '2020-11-08'
    },
    {
        id: 3,
        userId: 'pjh9107',
        userPw: 'pjh9107',
        userPwC: 'pjh9107',
        userEmail: 'pjh9107@ji.ho',
        userJoinDate: '2020-11-08'
    },
]

const users = createReducer<UserState, UserAction>(initialState, {
    [ADD_USER]: (state, {userId, userPw, userPwC, userEmail}) => state.concat({
        id: Math.max(...state.map(user => user.id)) + 1,
        userId,
        userPw,
        userPwC,
        userEmail,
        userJoinDate: '2020-11-08'
    })
});

export default users;