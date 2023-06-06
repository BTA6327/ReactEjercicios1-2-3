import React, {useState, useEffect } from 'react'

const ClockFuncional = (props) => {
    // Se genera una fecha como estado inicial del componente
    const estadoInicial = {
         nombre: 'Martín',
         apellidos: 'San José',
         fecha: new Date(),
         edad: 0
    }
    //valor inicial para un contador
    const timerInicial=0;
    /**
     * Queremos que el VALORINICIAL y PERSONAINICIAL sean 
     * parte del estado del componente para así poder gestionar su cambio
     * y que éste se vea reflejado en la vista del componente.
     * 
     * const [nombreVariable, funcionParaCambiar] = useState(valorInicial)
     */
    const [timerID, setInterval] = useState(timerInicial);
    const [persona, setState] = useState(estadoInicial);

    //componente didupdate expresado de manera funcinal
    useEffect(() => {
        setInterval(tick, 1000);
    }, [])
   
    return (
        <div>
            <h2>
         Hora Actual:
         {persona.fecha.toLocaleTimeString()}
         </h2>
         <h3>{persona.nombre} {persona.apellidos}</h3>
         <h1>Edad:{persona.edad}</h1>
        </div>
    );
    function tick() {
        let age=persona.edad+1;
        setState({
          nombre: estadoInicial.nombre,
          apellidos: estadoInicial.apellidos,
          fecha: new Date(),
          edad: age
        });
    }
}

export default ClockFuncional;
