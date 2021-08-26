import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./styles.css"

export default class NewGame extends Component {
    render() {
        return (
            <div className="container">
                <h1>Vamos a crear a nuestro personaje con react router dom</h1>
                <h3>¿Genero de tu personaje?</h3>
                <div className="buttons">
                    <Link to="/character/hombre">HOMBRE</Link>
                    <Link to="/character/mujer">MUJER</Link>
                </div>
            </div>
        )}}
