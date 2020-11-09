import { deprecated } from 'typesafe-actions';

const { createStandardAction } = deprecated;

// 액션 type
export const REMOVE_COMMAND = 'commands/REMOVE_COMMAND';
export const ADD_COMMAND = 'commands/ADD_COMMAND';

// 액션 생성 함수
export const removeCommand = createStandardAction(REMOVE_COMMAND)<number>();
export const addCommand = createStandardAction(ADD_COMMAND)<string>();