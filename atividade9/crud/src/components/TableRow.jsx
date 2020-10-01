import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class TableRow extends Component {    

    constructor(props) {
        super(props)
        this.delete = this.delete.bind(this)
    }

    delete(id, nome) {
        let res = window.confirm(`Deseja apagar ${nome}?`)
        if(res) {
            this.props.firebase.getFirestore().collection('disciplinas').doc(id).delete()
            .then(()=>console.log(`${nome} apagado!`))
            .catch(error=>console.log(error))
        }
    }

    render() {
        return (
            <tr>
                <td>
                    {this.props.disciplina._id}</td> 
                
                <td>
                    {this.props.disciplina.nome}</td>
                
                <td>
                    {this.props.disciplina.curso}</td>
                
                <td>
                    {this.props.disciplina.capacidade}</td>

                <td style={{ textAlign: "center" }}>
                    <Link to={"/edit/" + this.props.disciplina._id} className="btn btn-primary">Editar</Link></td>

                <td style={{ textAlign: "center" }}>
                    <button onClick={ ()=> this.delete(this.props.disciplina._id, 
                                        this.props.disciplina.nome)
                    } 
                    className="btn btn-danger">Deletar</button></td>
            </tr>
        )
    }
}