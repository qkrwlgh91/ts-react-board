import React from 'react';

function boardList() {
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
            <div className="board__list">
                <div className="board__list--header">
                    <h2>qkrwlgh</h2>
                    <h2>2020-11-03</h2>
                </div>
                <h1>게시글 첫번째 항목입니다. 두번째 칸까지 타이틀이 보입니다. 람쥐</h1>
                <div className="board__list--footer">
                    <p>조회수 10</p>
                    <p>댓글 3</p>
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

export default boardList;
