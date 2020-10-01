import React, { Component } from 'react'
import TableRow from './TableRow'

import FirebaseContext from '../utils/FirebaseContext'

const ListPage = () => (
    <FirebaseContext.Consumer>
        { (context) => <List firebase = {context} /> }
    </FirebaseContext.Consumer>
)


class List extends Component{
    
    constructor(props) {
        super(props)
        this.state = { disciplinas: [] }
        //this.deleteElementId = this.deleteElementId.bind(this)
    }

    componentDidMount() {
        //Axios.get('http://localhost:3001/disciplinas') json-server 
        /*Axios.get('http://localhost:3002/disciplinas/list') // express
        .then(
                (response) => {
                    this.setState({ disciplinas: response.data })
                }
            )
            .catch(
                (error) => {
                    console.log(error)
                }
            )*/
            this.ref = this.props.firebase.getFirestore().collection('disciplinas')
            this.ref.onSnapshot(this.alimentarDisciplinas.bind(this))
            
    }
    
    alimentarDisciplinas(query){
        let disciplinas = []
        query.forEach(
            (doc) => {
                const {nome, curso, capacidade} = doc.data()
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
        this.setState({disciplinas:disciplinas})
    }

    mountTable() {
        if (!this.state.disciplinas) return
        return this.state.disciplinas.map(
            (disc, i) => {
                return <TableRow disciplina={disc} key={i} 
                //deleteElementId={this.deleteElementId}
                firebase={this.props.firebase}/>
            }
        )
    }

    /*deleteElementId(id) {
        let disciplinasTemp = this.state.disciplinas
        for (let i = 0; i < disciplinasTemp.length; i++) if (disciplinasTemp[i]._id === id) disciplinasTemp.splice(i, 1)
        this.setState({ disciplinas: disciplinasTemp })
    }*/

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

export default ListPage;