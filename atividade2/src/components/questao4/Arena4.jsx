import React from 'react'
import {Img_hero, Img_enemy} from '../../contants'

function Hero (props){
    return(
        <div>
            <h1>Nome: {props.name}</h1>
            <img src={Img_hero} alt="Minha imagem" height="210"/>
            <p>Da arena: {props.arena}</p>
        </div>
    )
}

function Enimy (props){
    return(
        <div>
            <h1>Nome: {props.name}</h1>
            <img src={Img_enemy} alt="Minha" height="220"/>
            <p>Da arena: {props.arena}</p>
        </div>
    )
}

function Arena4 (props){
    return(
        <div class="card text-center">
        <center><h2> Questao 4 </h2></center><br></br>
        <h3>Arena: {props.arena}</h3>
        {
            React.Children.map(props.children, arena =>{
                        return React.cloneElement(arena,{...props})
                    }
                )//map
        }
        </div>
    )
}
export {Hero, Enimy, Arena4}