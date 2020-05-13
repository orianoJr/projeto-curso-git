function multiplicar() {
    let n1 = document.getElementById('numero')
    let resp = document.getElementById('seletor')
    if (n1.value.length == 0 ) {
        window.alert('digite um numero')
    } else {
        resp.innerHTML = ""
        var numero= Number(n1.value)
        for (let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text += `${numero} X ${c} = ${numero * c}`
            item.value = `tab${c}`
            resp.appendChild(item)
        }
    }
}