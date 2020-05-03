function ver() {
    var pais = document.getElementById('pais')
    var res = document.getElementById('res')
    var pais = (pais.value)
    if (pais == 'Brasil') {
        res.innerHTML = 'voce é Brasileiro'
    } else {
        res.innerHTML = 'vocé é estrangeiro'
    }
}