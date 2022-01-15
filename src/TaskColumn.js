import React from 'react';
import AddBtn from './AddBtn';
import Sticker from './Sticker';
import "./TaskColumn.scss";

function TaskColumn() {
    return (
        <div className='task-column'>
            <div className='task-column__head'>
            <div className='task-column__title'>
                Title column...
            </div>
            <AddBtn />
            </div>
            <div className='task-column__body'>
                Content
                <Sticker />
            </div>
        </div>
    )
}

export default TaskColumn
