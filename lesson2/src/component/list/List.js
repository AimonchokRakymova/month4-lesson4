import React from 'react';
import Button from "./Button.js";
import classes from "./list.module.css";

const List = ({ tasks, onDelete, onDone }) => {
    return (
        <div className={classes.list}>
            <ul>
                {tasks.map(task => (
                    <li key={task.id} style={task.completed ? { color: "green" } : {color: "black"}}>
                        {task.task}
                        <Button onClick={() => onDelete(task.id)} label="Удалить"/>
                        <Button onClick={() => onDone(task.id)} label="Сделано"/>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default List;

