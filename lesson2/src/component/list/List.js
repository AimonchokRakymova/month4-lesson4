import React from 'react';
import Button from "./Button";

const List = ({ tasks, onDelete }) => {
    return (
        <div>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>{task.task}
                        <Button onClick={() => onDelete(task.id)} label="Удалить"/>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default List;

