import React, { Component } from 'react'
import FirebaseContext from '../utils/FirebaseContext'
import DisciplinasServ from '../services/FiBDisciplinaServ'

const CreatePage = () => (
    <FirebaseContext.Consumer>
        { (context) => <Create firebase = {context}/> }
    </FirebaseContext.Consumer>
)

class Create extends Component{

    constructor(props){
        super(props)
        this.state = {nome:'', curso: '', capacidade: ''}
        this.setNome = this.setNome.bind(this)
        this.setCurso = this.setCurso.bind(this)
        this.setCapacidade = this.setCapacidade.bind(this)    
        this.onSubmit = this.onSubmit.bind(this)
    }

    setNome(e){
        this.setState({nome:e.target.value})
    }

    setCurso(e) {
        this.setState({curso: e.target.value })
    } 

    setCapacidade(e) {
        this.setState({capacidade: e.target.value })
    }
    
    onSubmit(e){
        e.preventDefault() //impede que o browser faça o reload, perdendo assim a informação 
        
        const disciplina = {nome: this.state.nome, 
                            curso: this.state.curso, 
                            capacidade: this.state.capacidade}

        DisciplinasServ.create(this.props.firebase.getFirestore(),
        (msg) => {
            if(msg === 'OK') console.log(`Disciplina ${disciplina.nome} inserido !`)
        },
        disciplina
        )

        this.setState({nome: '', curso: '', capacidade: ''})
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
            <h3>Criar Disciplina</h3>
            <form onSubmit = {this.onSubmit}>
                <div className="form-group">
                    <label>Nome: </label>
                    <input type="text" className="form-control" placeholder="Nome (*)" value={this.state.nome} onChange={this.setNome}/>
                </div>

                <div className="form-group">
                    <label>Curso: </label>
                    <input type="text" className="form-control"  placeholder="Curso (*)" value={this.state.curso} onChange={this.setCurso}/>
                </div>

                <div className="form-group">
                    <label>Capacidade: </label>
                    <input type="text" className="form-control"  placeholder="Capacidade (*)" value={this.state.capacidade} onChange={this.setCapacidade}/>
                </div>
                <p style = {{ color: "red" }}> (*) Campos obrigatórios! </p>

                <div className="form-group"><input type="submit" value="Criar Disciplina" className="btn btn-primary"/></div>
            </form>
            </div>
        )
    }
}

export default CreatePage