import React from 'react';
import { Commands } from '../../modules/commands';

type CommandProps = {
    command: Commands;
}

function CommandList({command}: CommandProps) {
    return (
        <div>
            <ul>
                <li>{command.id}</li>
                <li>{command.cWriter}</li>
                <li>{command.cDate}</li>
                <li>{command.cContent}</li>
            </ul> 
        </div>
    )
}

export default CommandList;
