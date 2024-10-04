const express = require('express')

//inicializa o app
const app = express()
//inicializa o servidor

//Lista de alunos
const  alunos = ['Mauro', 'Alice', 'Paula']

//Rota raiz 
app.get('/', (req, res) => res.send('Bem vindo ao Servidor Node.JS'))
app.get('/sobre', (req, res) => res.send('Esta é a página sobre o projeto'))
app.get('/contato', (req, res) => res.send('Página de contato'))

app.get('/alunos', (req, res) => {
    let html =  '<ul>'
    for(let aluno of alunos){
        html += `<li>${aluno}</li>`
    }
    html += '</ul>'
    
    res.send(html)
})

app.get('/aluno/:id', (req, res) =>{
    const id = req.params.id
    const alunoSel = alunos[id]
    if(alunoSel == undefined){
        res.status(404).send('Aluno não encontrado')
    }
    else{
        res.send(alunoSel)
    }
} )

app.get('/media/:id/:nota1/:nota2', (req, res) =>{
    const id = req.params.id
    const nota1 = req.params.nota1
    const nota2 = req.params.nota2

    const alunoSel = alunos[id]
    media = (parseFloat(nota1) + parseFloat(nota2)) / 2

    res.send(`A media do aluno(a) ${alunoSel}: ${media}`)
})

const porta = 3001 // configurando porta do servidor

app.listen(porta, () =>{
    console.log(`Servidor rodando na porta http://localhost:${porta}`)
})