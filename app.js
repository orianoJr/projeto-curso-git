/*var n1 = Number.parseFloat(window.prompt('digite um numero'))
var n2 = Number.parseFloat(window.prompt('digite outro numero'))
var n3 = n1 + n2
window.alert('a soma desses numeros é ' + n3)*/
/*var nome = String(window.prompt('digite o seu nome'))
document.write(`o seu nome em maiusculo é ${nome.toUpperCase()} e o seu nome em maiusculo ${nome.toLowerCase()} e ele tem ${nome.length}`)*/
/*var area = window.document.getElementById('area')
area.addEventListener('click', clicar)
area.addEventListener('mouseenter',entrar)
area.addEventListener('mouseout', saiu)
function clicar() {
    area.innerText = "clicou"
    area.style.background = "crimson"
}
function entrar(){
    area.innerText= "entrou"
}
function saiu() {
    area.innerText= "saiu"
    area.style.background= "green"
}*/

function somar() {
    var n1 = window.document.getElementById('txtn1')
    var n2 = window.document.getElementById('txtn2')
    var n1 = Number(n1.value)
    var n2 = Number(n2.value)
    var res = document.getElementById('resultado')
    var n3 = n1 + n2
    res.innerHTML = (`o resultado da soma entre ${n1} e ${n2} é igual a ${n3} `)
}