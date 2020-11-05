import React from 'react';
import BoardDetail from '../components/Board/boardDetail';
import BoardList from '../components/Board/boardList';

function Board() {
    return (
        <div className="boardBox">
            <BoardDetail />
            <BoardList />
        </div>
    )
}

export default Board;
