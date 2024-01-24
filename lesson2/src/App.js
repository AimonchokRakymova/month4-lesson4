import './App.css';
import React, {useState} from 'react';
import List from "./component/list/List";
// import Button from "./component/list/Button.js";
import classes from "./component/list/list.module.css";

const App = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            task: 'go out',
            completed: false
        },
        {
            id: 2,
            task: 'eat',
            completed: false
        },
        {
            id: 3,
            task: 'smile',
            completed: false
        },{
            id: 4,
            task: 'drink',
            completed: false
        },
        {
            id: 5,
            task: 'dance',
            completed: false
        },
        {
            id: 6,
            task: 'sing',
            completed: false
        },
    ]);

    const handleDoneClick = (taskId) => {
        const doneTask = tasks.map(task => {
            if(task.id === taskId){
                task.completed = !task.completed
            }
            return task
        })
        setTasks(doneTask)
        console.log(doneTask)
    };

    const handleDeleteClick = (taskId) => {
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        setTasks(updatedTasks);
    };


    return (
        <div className={classes.list}>
            <h1>Список планов на выходные</h1>
            <List tasks={tasks} onDone={handleDoneClick} onDelete={handleDeleteClick}/>
        </div>
    );
};

export default App;