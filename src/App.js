import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import ComponentA from './components/container/componentA';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente propio greeting.jsx*/}
        {/*<Greeting name="Byron"></Greeting>*/}
         {/* Componente ejemplo funcion greeting.jsx*/}
        {/*<GreetingF name="Byron"></GreetingF>*/}
        {/* Componente del listado de tareas*/}
        {/*<TaskListComponent></TaskListComponent>*/}
        <ComponentA></ComponentA>
      </header>
    </div>
  );
}

export default App;
