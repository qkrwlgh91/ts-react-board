import React from 'react';
import { Commands } from '../../modules/commands';
import { IoMdReturnRight } from 'react-icons/io';

type CommandProps = {
    command: Commands;
}

function CommandList({command}: CommandProps) {
    return (
        <div className="commandListBox">
            <div className="commandListBox__header">
                <p><IoMdReturnRight />  {command.cWriter}</p>
                <p>{command.cDate}</p>
            </div>
            <div className="commandListBox__context">
            <span >{command.cContent}</span>
            </div>
            <button className="commandListBox__cbtn">삭제</button>
        </div>
    )
}

export default CommandList;
