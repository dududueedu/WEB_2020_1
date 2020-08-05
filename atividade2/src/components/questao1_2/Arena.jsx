import React from 'react'
import {Img_hero, Img_enemy} from '../../contants'

function Hero (props){
    return(
        <div>
            <h1>Nome: {props.name}</h1>
            <img src={props.img} alt="Minha imagem" height="210"/>
        </div>
    )
}

function Enimy (props){
    return(
        <div>
            <h1>Nome: {props.name}</h1>
            <img src={props.img} alt="Minha" height="220"/>
        </div>
    )
}

function Arena (props){
    return(
        <div class="card text-center">
            <h3>Questao 1 e 2</h3><br/>
            <Hero name="Aquaman" img ={Img_hero}/>
            <Enimy name="Coringa" img ={Img_enemy}/>
        </div>
    )
}
export default Arena;