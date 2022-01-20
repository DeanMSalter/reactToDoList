import logo from './logo.svg';
import './App.css';
import { Route } from "react-router-dom";
import {useState} from "react";

const staticTasks = [
    "Get Milk",
    "Walk Dog",
    "Do other things"
]

function NoteEntry(props) {
    const [task, setTask] = useState("");
    return (
        <div className="taskAdding">
            <input
                type="text"
                value={task}
                onChange={event => setTask(event.target.value )}
                placeholder="New Task.."
                required
            />
            <input className="btnTaskAdd" type="button" value="Add" onClick={() => {
                props.addNote(task)
                setTask("")
            }}/>
        </div>
    );
}
function Task(props){
    return (
        <li>
            {props.task}
        </li>

    )
}

function TaskList(props) {
    return(
        <div className="TaskList">
            <ol>
                {props.tasks.map(task =>
                    <>
                        <Task task={task} removeTask={props.removeTask}/>
                        <input
                            type="button"
                            value="Delete"
                            onClick={() => {props.removeTask(props.task)}}
                            placeholder="New Task.."
                            required
                        />
                    </>
                )}
            </ol>
        </div>
        )
}

function App() {
  const [tasks, setTasks] = useState(staticTasks);

  const addTask =  (task) => {
      setTasks(tasks.concat(task))
  }
  const removeTask = (task) => {
      setTasks(tasks.filter(item => item !== task))
  }

  return (
    <div className="App">
        <NoteEntry addNote={addTask}/>
        <TaskList tasks={tasks} removeTask={removeTask}/>
    </div>
  );
}

export default App;
