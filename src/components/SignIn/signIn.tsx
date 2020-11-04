import React from 'react';

function signIn() {
    return (
        <>
            <div className="signInBox__logo">
                <span>JH BOARD</span>
            </div>
            <div className="signInBox__header">
                <h1>회원가입</h1>
            </div>
            <div className="signInBox__form">
                <form >
                    <label>
                        <p>아이디</p>   
                        <input placeholder="아이디를 입력해주세요. (7자리 이상)" className="signInBox__form--finput"/>
                        <button className="signInBox__form--cbtn">중복체크</button>
                    </label>
                    <label>
                        <p>비밀번호</p>   
                        <input placeholder="비밀번호를 입력해주세요. (7자리 이상)" />
                    </label>
                    <label>
                        <p>비밀번호 확인</p>
                        <input />
                    </label>
                    <label>
                        <p>이메일</p>
                        <input placeholder="이메일을 입력해주세요."/>
                    </label>
                    <div className="signInBox__form--btn">
                        <button type="submit">회원가입</button>
                        <button>취소</button>
                    </div>
                    
                </form>
            </div>
        </>
    )
}

export default signIn;
