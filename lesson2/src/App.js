import './App.css';
import List from "./component/list/List";

const App = () => {
    const tasksArray = [
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
    ];

    return (
        <div>
            <h1>Список задач на выходные</h1>
            <List tasks={tasksArray} />
        </div>
    );
};

export default App;