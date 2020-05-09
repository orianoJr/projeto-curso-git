function carregar() {
    var msg = document.getElementById('time')
    var img = document.getElementById('foto')

    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()

msg.innerHTML += `${hora} horas e ${minuto} minutos`
if (hora >= 0 && hora < 12) {
    img.src = "pasta/manha.png"
    document.body.style.background = '#e2cd9f'
}else if (hora >= 12 && hora < 18) {
    img.src = "pasta/tarde.png"
    document.body.style.background = rgb(244,166,154)
}else {
    img.src = "noite.png"
    document.body.style.background = '#515154'
}
}