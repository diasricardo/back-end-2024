const express = require ('express')
const ejs = require ('ejs')
const expressLayouts  = require('express-ejs-layouts')



const app = express()


app.set('view engine', 'ejs')

app.use(express.static('public'))

//Definir que iremos usar um layout padrao
app.use(expressLayouts)
app.set('layout', 'layouts/principal')


app.use(express.urlencoded({extended: true}))
//Rota da página principal do site
app.get('/', (req, res) => {
    res.render('index')
})

app.get("/sobre", (req, res) => {
    res.render('sobre')
})

app.get('/juros_simples', (req, res) =>{
    res.render('juros_simples')
})


app.post('/juros_simples', (req, res) => {
    const capital = parseFloat(req.body.capital)
    const taxa = parseFloat(req.body.taxa)
    const tempo = parseFloat(req.body.tempo)
    
    const juros = parseFloat(capital) * (parseFloat(taxa) / 100) * parseFloat(tempo)
    const total = parseFloat(capital) + juros
    
    res.render('juros_simples', {capital,  taxa, tempo, juros, total})

})

const rota = 3001;
app.listen(rota, () => {
    console.log(`Servidor rodando na porta http://localhost:${rota}`);
})