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
            }}/>
        </div>
    );
}

function App() {
  const [tasks, setTasks] = useState(staticTasks);

  const updateTasks =  (task) => {
      console.log("hereeee")
      setTasks(tasks.concat(task))
  }

  return (
    <div className="App">
      <section>
          <NoteEntry addNote={updateTasks}></NoteEntry>
          <div class="listHolder">
              <ol>
                  {tasks.map(task =>
                    <li>{task}</li>
                  )}
              </ol>
          </div>
      </section>
    </div>
  );
}

export default App;
