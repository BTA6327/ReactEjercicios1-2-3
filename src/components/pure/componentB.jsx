import React from 'react';
import PropTypes from 'prop-types';


const ComponentB = ({usuario}) => {
    return (
        <div>
            <h2>
                Nombre: {usuario.nombre}
            </h2>
            <h3>
                Apellido: {usuario.apellido}
            </h3>
            <h4>
                email: {usuario.email}
            </h4>
            <h5>
                {usuario.estado ? 'Contacto En Línea':'Contacto No Disponible'}
            </h5>
        </div>
    );
};


ComponentB.propTypes = {
    usuario: PropTypes.instanceOf(ComponentB)
};


export default ComponentB;
