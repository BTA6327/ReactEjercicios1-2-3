import React from 'react';
import {Task} from '../../models/task.class'
import { LEVELS } from '../../models/leveles.enum';
import TaskComponent from '../pure/task';


const TaskListComponent = () => {
    const defaultTask= new Task('Example','Default decription',false, LEVELS.NORMAL);
    return (
        <div>
            <div>
                <h1>Your Tasks:</h1>
            </div>
            {/* Aplicar un for/map para renderizar unna lista*/}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};


export default TaskListComponent;
