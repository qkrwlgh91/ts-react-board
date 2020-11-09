import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { addUser } from '../modules/users';

export default function useUserInsert() {
    const dispatch = useDispatch();

    const userInsert = useCallback((
        userId,
        userPw,
        userPwC,
        userEmail) => dispatch(addUser(
            userId,
            userPw,
            userPwC,
            userEmail
        )), [dispatch]);
    

        return {
            userInsert
        }
}