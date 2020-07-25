import React, {Component} from 'react'

export default class q4FILHO extends Component{  render(props) {
        return(
            <div>            
                <center><h4><b>QUESTÃO 4</b></h4></center>
                <br/><br/>
                <h1>Nome: {props.nome}</h1>
                <p>Curso: {props.curso}</p>
                <p>Cidade: {props.cidade}</p>
            </div>
        )
        
    }
}