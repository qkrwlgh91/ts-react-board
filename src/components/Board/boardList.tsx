import React from 'react';
import useBoard from '../../hooks/useBoard';

function BoardList() {
    const { writer, wDate, wTitle, count, commandCount, onAddCount } = useBoard();
    
    return (
        <div className="boardBox__list">
            <div className="board__search">
                <select name="" id="">
                    <option value="">작성자</option>
                    <option value="">글제목</option>
                </select>
                <input type="text"/>
                <button>검색</button>
            </div>
            <div className="board__list" onClick={onAddCount}>
                <div className="board__list--header">
                    <h2>{writer}</h2>
                    <h2>{wDate}</h2>
                </div>
                <h1>{wTitle}</h1>
                <div className="board__list--footer">
                    <p>조회수 {count}</p>
                    <p>댓글 {commandCount}</p>
                </div>
            </div>
            <div className="board__wbtn">
                <button className="board__wbtn-btn">글작성</button>
            </div>
            <div  className="board__paging">
                페이징
            </div>
        </div>
    )
}

export default BoardList;
