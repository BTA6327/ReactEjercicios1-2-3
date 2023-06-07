import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import ComponentA from './components/container/componentA';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import Ejemplo3 from './hooks/Ejemplo3'
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4'
import Greetingstyled from './components/pure/forms/greetingStyled';
import Clock from './hooks/lifecycle/Clock';
import ClockFuncional from './hooks/lifecycle/ClockFuncional';
import Father from './components/container/father';
function App() {
  return (
    <div className="App">
       {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />*/}
        {/* Componente propio greeting.jsx*/}
        {/*<Greeting name="Byron"></Greeting>*/}
         {/* Componente ejemplo funcion greeting.jsx*/}
        {/*<GreetingF name="Byron"></GreetingF>*/}
        {/* Componente del listado de tareas*/}
        {/*<TaskListComponent></TaskListComponent>*/}
         {/*<ComponentA></ComponentA>*/}
         {/*<Ejemplo1></Ejemplo1>*/}
         {/*<Ejemplo2></Ejemplo2>*/}
         {/*Ejemplo 3 micomponenteconcontexto  <MiComponenteConContexto></MiComponenteConContexto>*/}
         {/*<Ejemplo4 nombre="Byron">
          { Todo lo que hay aqui es tratado como el props.children en cualquier componente}
          <h3>Contenido del props.children</h3>
         </Ejemplo4> */}
         {/*<Greetingstyled name="Byron"></Greetingstyled>*/}
         {/*<Clock></Clock>*/}
         {/*<ClockFuncional></ClockFuncional>*/}
         
      {/*</header>*/}
      {/*{<TaskListComponent></TaskListComponent>}*/}
      <Father></Father>
    </div>
  );
}

export default App;
