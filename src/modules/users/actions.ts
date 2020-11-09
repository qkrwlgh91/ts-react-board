import { create } from 'domain';
import { deprecated } from 'typesafe-actions';

const { createCustomAction } = deprecated;

// 액션 type
export const ADD_USER = 'users/ADD_USER';


// 액션 생성 함수
export const addUser = createCustomAction(ADD_USER, type => {
    return (a: string, b: string, c: string, d: string) => ({ type, userId: a, userPw: b, userPwC: c, userEmail: d})
})
