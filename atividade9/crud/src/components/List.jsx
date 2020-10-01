import React, { Component } from 'react'
import TableRow from './TableRow'

import FirebaseContext from '../utils/FirebaseContext'
import DisciplinasServ from '../services/FiBDisciplinaServ'

const ListPage = () => (
    <FirebaseContext.Consumer>
        {(context) => <List firebase={context} />}
    </FirebaseContext.Consumer>
)


class List extends Component {

    constructor(props) {
        super(props)
        this._isMounted = false;
        this.state = { disciplinas: [], loading: false }
    }

    componentDidMount() {
        this._isMounted = true;  
        this.setState({loading: true})
        DisciplinasServ.list(this.props.firebase.getFirestore(),
                                (disciplinas) => {
                                    if(disciplinas){
                                        if(this._isMounted) this.setState({disciplinas:disciplinas, loading: false})
                                    }
                                })
    }

    componentWillUnmount(){
        this._isMounted = false;
    }

    /*alimentarDisciplinas(query) {
        let disciplinas = []
        query.forEach(
            (doc) => {
                const { nome, curso, capacidade } = doc.data()
                disciplinas.push(
                    {
                        _id: doc.id,
                        nome,
                        curso,
                        capacidade,
                    }
                )
            }
        )
        if(this._isMounted)
            this.setState({ disciplinas: disciplinas, loading: false})
    }*/

    mountTable() {
        if (!this.state.disciplinas) return
        return this.state.disciplinas.map(
            (disc, i) => {
                return <TableRow disciplina={disc} key={i}
                    firebase={this.props.firebase} />
            }
        )
    }

    gerarConteudo() {
        if(this.state.loading) {
            return (
                <tr>
                    <td colSpan='6'>
                    <div className="align-items-center">
                        <p> Loading... </p>
                        <div className="spinner-border ml-auto" role="status" aria-hidden="true"></div>
                        </div>  
                    </td>
                </tr>
            )
        }else return this.mountTable()
    }

    render() {
        return (
            <div style={{ marginTop: 20 }}>
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
                        {this.gerarConteudo()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ListPage;