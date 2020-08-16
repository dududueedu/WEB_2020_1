import React, { Component } from 'react'
import Axios from 'axios'
import TableRow from './TableRow'

export default class List extends Component{
    
    constructor(props) {
        super(props)
        this.state = { disciplinas: [] }
        //this.deleteElementId = this.deleteElementId.bind(this)
    }

    componentDidMount() {
        Axios.get('http://localhost:3001/disciplinas')
            .then(
                (response) => {
                    this.setState({ disciplinas: response.data })
                }
            )
            .catch(
                (error) => {
                    console.log(error)
                }
            )
    }
    
    mountTable() {
        if (!this.state.disciplinas) return
        return this.state.disciplinas.map(
            (disc, i) => {
                return <TableRow disciplina={disc}
                 key={i} 
                /*apagarElementoPorId={this.apagarElementoPorId}*//>
            }
        )
    }

    render(){
        return(
            <div style={{ marginTop: 20}}>
                <h2>List Disciplinas</h2>
                
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Curso</th>
                            <th>Capacidade</th>
                            <th colSpan="2" style={{ textAlign: "center" }}>Acões</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.mountTable()}
                    </tbody>
                </table>
            </div>
        )
    }
}