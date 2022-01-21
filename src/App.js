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

function EditTask(props) {
    const [newTask, setNewTask] = useState("");


    return (
        <>
            <input
                key={"btnEdit." + props.task}
                type="button"
                value="Edit"
                onClick={() => {
                    if (document.getElementById(props.task).className == "hidden") {
                        document.getElementById(props.task).className = ""
                    } else {
                        document.getElementById(props.task).className = "hidden"
                    }
                }}
                required
            />
            <div key={props.task} id={props.task} className="hidden">
                <input type="text" value={newTask} onChange={event => setNewTask(event.target.value )}/>
                <input type="button" value="Submit" onClick={() => {
                    props.editTask(props.task, newTask)
                    setNewTask("")
                }}/>
            </div>
        </>

    )
}

function TaskList(props) {
    return(
        <div className="TaskList">
            <ol>
                {console.log(props.tasks)}
                {props.tasks.map(task =>
                    <>
                        <Task key={"task." + task} task={task} removeTask={props.removeTask}/>
                        <input
                            key={"delete." + task}
                            type="button"
                            value="Delete"
                            onClick={() => {
                                props.removeTask(task)
                                console.log(task)
                            }}
                            required
                        />
                        <EditTask key={"edit." + task} task={task} editTask={props.editTask} />
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
  const editTask = (task, newTask) => {
      let newTasks = [...tasks]
      newTasks[newTasks.indexOf(task)] = newTask
      setTasks(newTasks)
  }

  return (
    <div className="App">
        <NoteEntry addNote={addTask}/>
        <TaskList tasks={tasks} removeTask={removeTask} editTask={editTask}/>
    </div>
  );
}

export default App;
