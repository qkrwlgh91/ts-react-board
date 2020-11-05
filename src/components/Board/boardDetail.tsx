import React from 'react';
import Command from './command';

function boardDetail() {
    return (
        <div className="boardBox__detail">
            <div className="boardBox__detail--info">
                <div className="boardBox__detail--info-img">
                    이미지
                </div>
                <div className="boardBox__detail--info-cont">
                    <h1>게시글 첫번째 항목입니다. 제</h1>
                    <p>qkrwlgh</p>
                    <p>2020-11-03</p>
                    <p>조회수 10</p>
                </div>
            </div>
            <div className="boardBox__detail--content">
                이 영역은 작성 내용이 작성되는 곳입니다.
            </div>
            <Command />
        </div>
    )
}

export default boardDetail;
