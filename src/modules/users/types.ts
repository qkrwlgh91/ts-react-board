import {ActionType} from 'typesafe-actions';
import * as actions from './actions';

export type UserAction = ActionType<typeof actions>;

export type Users = {
    id: number;
    userId: string;
    userPw: string;
    userPwC: string;
    userEmail: string;
    userJoinDate: string;
};

export type UserState = Users[];