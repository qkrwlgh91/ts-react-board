import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { addCommand } from '../modules/commands';

export default function useCommandInsert() {
    const dispatch = useDispatch();
    const onInsert = useCallback(cContent => dispatch(addCommand(cContent)), [dispatch]);

    return {
        onInsert
    }
}