import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
//QUESTAO 1 e 2
import Arena from './components/questao1_2/Arena'

//QUESTAO 3
import Word from './components/questao3/Word'

//QUESTAO 4
import {Arena4, Hero, Enimy} from './components/questao4/Arena4'


const root = document.getElementById('root')
//questao 1 e 2
//ReactDOM.render(<Arena/>,root)

//questao 3
/*ReactDOM.render(<Word> <p>QUESTAO 3</p>
                    <Arena />
                    <Arena />
                    <Arena />
                </Word>,root)*/

//questao4
ReactDOM.render(<Arena4 arena = " Tokio Dome - Undergrond Arena ">
                <Hero name= "Aquaman"/>
                <Enimy name="Coringa"/>
</Arena4>, root)