import React from 'react'
import './game.css'

export default function Squares(props) {
    
        return (
            <div>
                <button className="square" onClick={props.onClick}>
                    {props.value}
                </button>
            </div>
        )   
}
