import React, {useState} from 'react';
import {Usuario} from '../../models/classA'
import ComponentB from '../pure/componentB';


const ComponentA = () => {
    const[estado,setestado]=useState(false);
    const cambiarEstado=()=>
    {
        //actualizar el setage
        if(estado===false){
            setestado(true);
        }else{
            setestado(false);
        }
    }
    const defaultUsuario= new Usuario('Byron','Tunja',"bt@gmail.com", estado);
    return (
        <div>
            <div>
                <h1>Estado del usuario:</h1>
            </div>
            {/* Llamar al usuario*/}
            <ComponentB usuario={defaultUsuario}></ComponentB>
            <div>
                    <button onClick={cambiarEstado}>Conectar/Desconectar</button>
            </div>
            
        </div>
    );
};


export default ComponentA;
