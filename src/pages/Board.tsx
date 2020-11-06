import React from 'react';
import BoardDetail from '../components/Board/BoardDetail';
import BoardList from '../components/Board/BoardList';

function Board() {
    return (
        <div className="boardBox">
            <BoardDetail />
            <BoardList />
        </div>
    )
}

export default Board;
