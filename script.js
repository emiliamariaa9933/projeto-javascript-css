function confirmar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('textano')
    var res = document.querySelector('div#res')


    if (formAno.value.length == 0 || Number(formAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else if (Number(formAno.value) < 1900) {
        window.alert('[ERRO] Ano de nascimento não pode ser inferior à 1900.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 21) {
                //adulto
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            genero = "Mulher"
            
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src','foto-jovem-f.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                //idosa
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.getElementsByClassName,textAlign = 'center'
        res.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos.`
        res.appendChild(img)

}

}