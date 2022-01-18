import logo from './logo.svg';
import './App.css';
import { Route } from "react-router-dom";




function App() {
  return (
    <div className="App">
      <section>
          <div class="taskAdding">
              <textarea></textarea>
          </div>
          <div class="listHolder">
              <ol>
                  <li>Get milk</li>
                  <li>Get milk</li>
                  <li>Get milk</li>
                  <li>Get milk</li>
                  <li>Get milk</li>
              </ol>
          </div>
      </section>
    </div>
  );
}

export default App;
