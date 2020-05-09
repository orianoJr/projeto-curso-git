function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var nas = document.getElementById('ano')
    var nas = Number(nas.value)
    var idade = ano - nas
    var res = document.getElementById('res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if(idade <= 0){
        window.alert('valor invalido')
    }else {
        var sexo = document.getElementsByName('sexo')
        var genero = ''
        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'homem-criança.png')
            }else if (idade < 21) {
                img.setAttribute('src', 'homem-jovem.png')
            }else if (idade < 50) {
                img.setAttribute('src', 'homem-adulto.png')
            }else {
                img.setAttribute('src', 'homem-idoso.png')
            }
        }else if (sexo[1].checked){
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'mulher-crianca.png')
            }else if (idade < 21) {
                img.setAttribute('src', 'mulher-adolescente.png')
            }else if (idade < 50) {
                img.setAttribute('src', 'mulher-adulta.png')
            }else {
                img.setAttribute('src', 'mulher-idosa.png')
            }
        }
    }
    res.innerHTML = `voce é um(a) ${genero} ${idade} anos`
    res.appendChild(img)
    res.style.textAlign = 'center'
}