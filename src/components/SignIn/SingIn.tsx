import React, {useState, ChangeEvent, FormEvent} from 'react';
import useUserInsert from '../../hooks/useUserInsert';

function SignIn() {

    const [userInfo, setUserInfo] = useState({
        userId: '',
        userPw: '',
        userPwC: '',
        userEmail: ''
    });

    const { userId, userPw, userPwC, userEmail } = userInfo;

    const { userInsert } = useUserInsert();

    const onChange = (e:ChangeEvent<HTMLInputElement>) => {
       const { value, name } = e.target;
       setUserInfo({
           ...userInfo,
           [name]: value
       });
    };

    const onSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        userInsert(userId, userPw, userPwC, userEmail);
        
        setUserInfo({
            userId: '',
            userPw: '',
            userPwC: '',
            userEmail: ''
        });
        
    }


    return (
        <>
            <div className="signInBox__logo">
                <span>JH BOARD</span>
            </div>
            <div className="signInBox__header">
                <h1>회원가입</h1>
            </div>
            <div className="signInBox__form">
                <form onSubmit={onSubmit}>
                    <label>
                        <p>아이디</p>   
                        <input onChange={onChange} name="userId" value={userId} placeholder="아이디를 입력해주세요. (7자리 이상)" className="signInBox__form--finput"/>
                        <button className="signInBox__form--cbtn">중복체크</button>
                    </label>
                    <label>
                        <p>비밀번호</p>   
                        <input onChange={onChange} name="userPw" value={userPw} placeholder="비밀번호를 입력해주세요. (7자리 이상)" />
                    </label>
                    <label>
                        <p>비밀번호 확인</p>
                        <input onChange={onChange} name="userPwC" value={userPwC} placeholder="비밀번호를 확인해주세요" />
                    </label>
                    <label>
                        <p>이메일</p>
                        <input onChange={onChange} name="userEmail" value={userEmail} placeholder="이메일을 입력해주세요."/>
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

export default SignIn;
