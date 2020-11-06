import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type CommandAction = ActionType<typeof actions>;

export type Commands = {
    id: number;
    cWriter: string;
    cDate: string;
    cContent: string;
};

export type CommandState = Commands[];