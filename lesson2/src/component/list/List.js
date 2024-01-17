import React from 'react';
import Button from "./Button";

const List = ({ tasks }) => {
    return (
        <div>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>{task.task}</li>
                ))}
            </ul>
            <Button label="Выполнить"/>
            <Button label="Игнорировать"/>
        </div>
    );
};

export default List;

