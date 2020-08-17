import React, { Component } from 'react'
import axios from 'axios'

export default class Edit extends Component {

    constructor(props) {
        super(props)

        this.state = {nome: '', curso: '', capacidade: ''}

        this.setNome = this.setNome.bind(this)
        this.setCurso = this.setCurso.bind(this)
        this.setCapacidade = this.setCapacidade.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    setNome(e) {
        this.setState({ nome: e.target.value })
    }
    setCurso(e) {
        this.setState({ curso: e.target.value })
    }
    setCapacidade(e) {
        this.setState({ capacidade: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault() //impedir de fazer reload da pagina

        const editaDisciplina = {
            nome: this.state.nome,
            curso: this.state.curso,
            capacidade: this.state.capacidade
        }

        axios.put('http://localhost:3001/disciplinas/' + this.props.match.params.id, editaDisciplina)
            .then(
                (res) => {
                    this.props.history.push('/list')
                }
            )
            .catch(
                (error) => {
                    console.log(error)
                }
            )
    }

    componentDidMount() {
        axios.get('http://localhost:3001/disciplinas/' + this.props.match.params.id)
            .then(
                (res) => {
                    this.setState({
                        nome: res.data.nome,
                        curso: res.data.curso,
                        capacidade: res.data.capacidade
                    })
                }
            )
            .catch(
                (error) => {
                    console.log(error)
                }
            )
    }


    render() {
        return (
            <div className="containerCreate" style={{ marginTop: 20 }}>
                <h3 style={{ marginBottom: 20 }}><strong>Editar disciplina</strong></h3>

                <div className="alert alert-primary" role="alert"
                    style={{ display: "none" }}>Disciplina editada com sucesso!
                </div>

                <div className="alert alert-danger" role="alert"
                    style={{ display: "none" }}>Erro ao editar disciplina.
                </div>


                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input type="text" className="form-control"
                            placeholder="Nome (*)"
                            value={this.state.nome}
                            onChange={this.setNome}
                            required />
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control"
                            placeholder="Curso (*)"
                            value={this.state.curso}
                            onChange={this.setCurso}
                            required />
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control"
                            placeholder="Capacidade (*)"
                            value={this.state.capacidade}
                            onChange={this.setCapacidade}
                            required />
                    </div>
                    <p style={{ color: "red" }}> (*) Campos obrigatorios! </p>

                    <div className="form-group">
                        <input type="submit" value="Editar" className="btn btn-primary" />
                    </div>

                </form>
            </div>
        )
    }
}