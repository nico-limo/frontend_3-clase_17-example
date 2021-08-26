import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./styles.css";

export default class Character extends Component {  
    render() {
        const genero = this.props.match.params.genero;
        const url = this.props.match.url
        return (
            <div className="container">
                <h1>{`El genero de tu personaje es ${genero}`}</h1>
                <img width="240px" src={`/images/${genero}.png`} alt={`${genero}`} />
                <h3>¿Clase de tu personaje?</h3>
                <div className="buttons">
                    <Link to={`${url}/guerrer${genero === "hombre" ? "o" : "a"}`}>{`Guerrer${genero === "hombre" ? "o" : "a"}`}</Link>
                    <Link to={`${url}/arquer${genero === "hombre" ? "o" : "a"}`}>{`Arquer${genero === "hombre" ? "o" : "a"}`}</Link>
                    <Link to={`${url}/mag${genero === "hombre" ? "o" : "a"}`}>{`Mag${genero === "hombre" ? "o" : "a"}`}</Link>
                </div>
                <Link id="gameButton" to="/">Volver</Link>
            </div>
        )
    }}
