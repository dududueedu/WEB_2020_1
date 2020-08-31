const DisciplinaM = require('../models/DisciplinaM')

let disciplinas = [
    {_id: 0, nome: 'Arquitetura', curso: 'ES', capacidade: 34},
    {_id: 1, nome: 'FUP', curso: 'EC', capacidade: 61},
    {_id: 2, nome: 'GPN', curso: 'SI', capacidade: 98}
]
let _id = 3

class DisciplinaS{
    static register(data){
        let disciplina = new DisciplinaM(
            _id++,
            data.nome,
            data.curso,
            data.capacidade
        )
        disciplinas.push(disciplina)
        return disciplina
    }

    static list(){
        return disciplinas;
    }

    static update(_id, data){
        for(let disc of disciplinas){
            if(disc._id == _id){
                disc.nome = data.nome
                disc.curso = data.curso
                disc.capacidade = data.capacidade
                return disc
            }
            //return disc
        }
        return null
    }

    static delete(_id){
        for(let i = 0; i < disciplinas.length; i++){
            if(disciplinas[i]._id == _id){
                disciplinas.splice(i,1)
                return true
            }
        }
        return false
    }

    static retrieve(_id){
        for(let i = 0; i < disciplinas.length; i++){
            if(disciplinas[i]._id == _id){
                return disciplinas[i]
            }
        }
        return {}
    }
}

module.exports = DisciplinaS