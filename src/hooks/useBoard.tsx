import { useCallback } from 'react';
import { RootState } from '../modules';
import { useSelector, useDispatch } from 'react-redux';
import { addCount } from '../modules/boards';

export default function useBoard() {
    const writer = useSelector((state: RootState) => state.boards.writer);
    const wDate = useSelector((state: RootState) => state.boards.wDate);
    const wTitle = useSelector((state: RootState) => state.boards.wTitle);
    const count = useSelector((state: RootState) => state.boards.count);
    const commandCount = useSelector((state: RootState) => state.boards.commandCount);
    const dispatch = useDispatch();

    const onAddCount = useCallback(() => dispatch(addCount()), [dispatch]);

    return {
        writer,
        wDate,
        wTitle,
        count,
        commandCount,
        onAddCount
    }
}