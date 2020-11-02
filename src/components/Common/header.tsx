import React from 'react';
import { Link } from 'react-router-dom';

function header() {
    return (
            <ul className='menuList'>
                <li>
                    <Link to="/">JH BOARD</Link>
                </li>
                <li>
                    <Link to="/signUp">회원가입</Link>
                </li>
            </ul>
    )
}

export default header
