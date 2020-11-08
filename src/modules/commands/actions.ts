import { deprecated } from 'typesafe-actions';

const { createStandardAction } = deprecated;

// 액션 type
export const REMOVE_COMMAND = 'commands/REMOVE_COMMAND';

// 액션 생성 함수
export const removeCommand = createStandardAction(REMOVE_COMMAND)<number>();