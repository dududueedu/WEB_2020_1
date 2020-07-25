import React from 'react'

export default props => {
    return(
        <div>            
            <center><h4><b>QUESTÃO 3</b></h4></center>
            <br/><br/>
            <h1>Nome: {props.nome}</h1>
            <p>Curso: {props.curso}</p>
            <p>Cidade: {props.cidade}</p>
        </div>
    )
}