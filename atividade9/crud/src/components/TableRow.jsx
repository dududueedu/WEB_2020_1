import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class TableRow extends Component {    

    constructor(props) {
        super(props)
        this.delete = this.delete.bind(this)
    }

    delete() {
        //axios.delete('http://localhost:3001/disciplinas/' + this.props.disciplina.id) json-server
        /*axios.delete('http://localhost:3002/disciplinas/delete/' + this.props.disciplina._id) //express
        .then(
                (res) => {
                    this.props.deleteElementId(this.props.disciplina._id)
                    //console.log('APAGADOOOO')
                }
            )
            .catch(
                (error) => {
                    console.log(error)
                }
            )*/
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
                    <button onClick={this.delete} className="btn btn-danger">Deletar</button></td>
            </tr>
        )
    }
}