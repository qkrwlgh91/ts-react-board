import { deprecated } from 'typesafe-actions';

const { createStandardAction } = deprecated;

// 액션 type
export const ADD_COUNT = 'boards/ADD_COUNT';

// 액션 생성 함수
export const addCount = createStandardAction(ADD_COUNT)();