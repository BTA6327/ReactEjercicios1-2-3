import React, { useState, useEffect } from 'react';
import {Task} from '../../models/task.class'
import { LEVELS } from '../../models/leveles.enum';
import TaskComponent from '../pure/task';

// Importamos la hoja de estilos de task.scss
import '../../styles/task.scss';
import Taskform from '../pure/forms/taskForm';


const TaskListComponent = () => {
    const defaultTask1 = new Task('Example1', 'Description1', true, LEVELS.NORMAL);
    const defaultTask2 = new Task('Example2', 'Description 2', false, LEVELS.URGENT);
    const defaultTask3 = new Task('Example3', 'Description 3', false, LEVELS.BLOCKING);


    // Estado del componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    // Control del ciclo de vida del componente
    useEffect(() => {
        console.log('Task State has been modified');
        setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => {
            console.log('TaskList component is going to unmount...')
        }
    }, [tasks])

    const changeCompleted =(id) =>{
        console.log("Cambiar estado de una tarea")
    }
    return (
        <div>
            <div>
                <h1>Your Tasks:</h1>
            </div>
            {/* Aplicar un for/map para renderizar unna lista*/}
            <TaskComponent task={defaultTask1}></TaskComponent>
        </div>
    );
};


export default TaskListComponent;
