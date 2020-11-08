import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { removeCommand } from '../modules/commands';

export default function useCommandAction(id: number) {
    const dispatch = useDispatch();

    const onRemove = useCallback(() => dispatch(removeCommand(id)), [dispatch, id])

    return { onRemove }
}
