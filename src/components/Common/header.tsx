import React from 'react';
import { Link } from 'react-router-dom';

function header() {
    return (
            <ul>
                <li>
                    <Link to="/">JH BOARD</Link>
                </li>
                <li>
                    <Link to="/board">게시판</Link>
                </li>
            </ul>
    )
}

export default header
