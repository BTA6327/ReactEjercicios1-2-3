import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {
    constructor(props){
        super(props);
        this.state ={
            age:25
        }
    }
    render() {
        return (
            <div>
                <h1>!Hola {this.props.name}!</h1>
                <h2>Tu edad es de: {this.state.age}</h2>
                <div>
                    <button onClick={this.birthday}>Cumplir Años</button>
                </div>
            </div>
        );
    }
    birthday =()=>{
        this.setState((prevState)=>(
        {
            age: prevState.age + 1
        }
        ))
    }
}

// especificar que tipo de dato es necesario.
Greeting.propTypes = {
    name: PropTypes.string,
};


export default Greeting;
