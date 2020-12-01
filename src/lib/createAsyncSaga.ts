import { call, put } from 'redux-saga/effects';
import { AsyncActionCreatorBuilder, PayloadAction } from 'typesafe-actions';

// 재사용성을 위하여 함수의 파라미터는 하나의 값을 사용하도록하고, action.payload를 그대로 파라미터로 넣어주도록한다.
// 여러 종류의 파라미터가 필요한 경우 객체 형태로 만들어 넣어줘야 함

/* 
    타입스크립의 타입변수 제네릭
    -. 여러 타입에 대해 동작하는 함수를 정의하되, 해당 함수를 정의할 때는 알 수 없고 사용할 땨애만 할 수 있는 타입 정보를 사용하고 싶을때 사용할 수 있는것이 제네릭이다.

    -. 요소를 사용하는 시점에서만 알 수 있는 타입을 담아두기 위해서는 타입 변수가 필요하다. 타입 변수와 타입의 관계는 매개변수와 인자 값의 관계와 비슷하다.

    -. funtion 함수명<타입 변수>(인자 티입): 반환타입 { 함수 내용 }
*/

type PromiseCreatorFunction<P, T> = ((payload: P) => Promise<T>) | (() => Promise<T>);

// action이 payload를 갖고 있는지 확인
// type guard 문법
function isPayloadAction<P>(action: any): action is PayloadAction<string, P> {
    return action.payload !== undefined;
};

export default function createAsyncSaga<T1, P1, T2, P2, T3, P3>(
    asyncActionCreator: AsyncActionCreatorBuilder<[T1, [P1, undefined]], [T2, [P2, undefined]], [T3, [P3, undefined]]>,
    promiseCreator: PromiseCreatorFunction<P1, P2>
) {
    return function* saga(action: ReturnType<typeof asyncActionCreator.request>) {
        try {
            const result = isPayloadAction<P1>(action)
            ? yield call(promiseCreator, action.payload)
            : yield call(promiseCreator);
        } catch (e) {
            yield put(asyncActionCreator.failure(e))
        }
    }
}