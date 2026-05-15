import chalk from "chalk"
import fs from "fs"
import path from "path"

const bancodedados = path.join(import.meta.dirname, 'base.txt')

function lerDados (nomeArquivo){
    const dados = fs.readFileSync(nomeArquivo, "utf-8").split(/\r?\n/)
    const produtos = []
    dados.forEach(dado => {
        produtos.push(new produtos(dado))
    })
    return produtos
}

function mostrarProdutos(produtos){
    console.log(chalk.bgBlueBright(" nome o produto\t\t\t| preço\t | estoque\t"))
    produtos.forEach(produtos =>{
        console.log(chalk.rgb(60, 0, 150)(`${produtos.nome}\t| R$ ${produtos.preco}\t| ${produtos.estoque}`))
    })
    console.log(chalkGreen(`Total de produtos: ${produtos.length}`))
    
}

function Produto(linha){
    const propiedades = linha.split('|')
    const prod = {}
    propiedades.forEach(propiedades =>{
        const atributos = propiedades.split(':')
        prod[atributos[0].trim()] = atributos[1].trim()
    })
    this.nome = prod.nome
    this.preco = Number.parseFloat(prod.preco)
    this.estoque = Number.parseFloat(prod.estoque)
}

function rodarServidor(){
    const listaDeProdutos = lerDados(BANCODADOS);
    mostrarProdutos(listaDeProdutos);
}

rodarServidor();