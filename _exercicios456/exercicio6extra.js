function multiplicar() {
    var n1 = document.getElementById('numero')
    var m1 = document.getElementById('multiplicador')
    var res = document.getElementById('seletor')
    if (n1.value.length == 0) {
        window.alert('ERRO! digite algum numero')
    } else {
        res.innerHTML = ''
        var n = Number(n1.value)
        var m = Number(m1.value)
        for (let c = 1; c <= m ; c++){
            var item = document.createElement('option')
            item.text += `${n} x ${c} = ${n * c}`
            res.appendChild(item)
            item.value = `tab${c}`
        }
             }
    }
