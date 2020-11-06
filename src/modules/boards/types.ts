import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type BoardAction = ActionType<typeof actions>;

export type Board = {
    writer: string;
    wDate: string;
    wTitle: string;
    count: number;
    commandCount: number;
}

export type BoardState = Board;