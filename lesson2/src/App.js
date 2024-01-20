import './App.css';
import React, {useState} from 'react';
import List from "./component/list/List";
import Button from "./component/list/Button";

const App = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            task: 'go out',
        },
        {
            id: 2,
            task: 'eat',
        },
        {
            id: 3,
            task: 'smile',
        },{
            id: 4,
            task: 'drink',
        },
        {
            id: 5,
            task: 'dance',
        },
        {
            id: 6,
            task: 'sing',
        },
    ]);

    const handleEditClick = () => {
        console.log('Редактировано!');
    };

    const handleDoneClick = () => {
        console.log('Сделано!');
    };

    const handleDeleteClick = (taskId) => {
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        setTasks(updatedTasks);
    };


    return (
        <div>
            <h1>Список планов на выходные</h1>
            <List tasks={tasks} onDelete={handleDeleteClick} />
            <div className="button-container">
                <Button onClick={handleEditClick} label="Редактировать"/>
                <Button onClick={handleDoneClick} label="Сделано"/>
            </div>
        </div>
    );
};

export default App;