function contar(){
    var n1 = document.getElementById('inicio')
    var n2 = document.getElementById('fim')
    var n3 = document.getElementById('passos')    
    var inicio = Number(n1.value)
    var fim = Number(n2.value)
    var passos = Number(n3.value)
    var resp = document.getElementById('resposta')
    resp.innerHTML = ("resultado...<br>")
    if (inicio == 0) {
        window.alert('ERROR!')
    }if(fim == 0 ){
        window.alert('ERROR!')
    }if (passos == 0) {
        passos = 1
    }
    if (inicio < fim) {
        while (inicio <= fim ){
                resp.innerHTML += `${inicio} \u{1F449}`
            var inicio = inicio + passos
    }
    
    }else if (inicio > fim) {
        while (inicio >= fim) {
            resp.innerHTML += `${inicio}\u{1F449}`
            var inicio = inicio - passos    
        }
    }
    resp.innerHTML += ('\u{26F3}') 
}
         