import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { BsPeopleCircle } from 'react-icons/bs';

function header() {
    return (
        <>
            <ul className='menuList'>
                <li>
                    <Link to="/">JH BOARD</Link>
                </li>
                <li>
                    <button className="toggleBtn">
                        <FaBars />  <BsPeopleCircle className="bpc" />
                    </button>
                </li>
            </ul>
            <div className="menuPop">
                <Link to="/signIn">회원가입</Link>
                <Link to="/login">로그인</Link>
            </div>
        </>
            
    )
}

export default header;
