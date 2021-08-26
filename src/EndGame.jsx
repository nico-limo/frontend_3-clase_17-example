import React, { Component } from 'react'
import "./styles.css"

export default class EndGame extends Component {
    render() {
        const {genero, clase} = this.props.match.params;
        const goBack = this.props.history.goBack
        return (
            <div className="container">
                <h1>ENHORABUENA</h1>
                <img width="240px" src={`/images/${clase}.png`} alt={`${clase}`} />
                <h3>{`Tu personaje es ${genero} y su clase es ${clase}.`}</h3>

                <button id="gameButton" onClick={goBack} >Volver</button>
            </div>
        )}}