function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
       /// res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
                
        if (fsex[0].checked) {
            document.body.style.background= 'blue'
            genero = 'Homem'
            if (idade >=0 && idade < 18) {
            //criança
            img.setAttribute('src', 'menino-crianca.jpg')
            } else if (idade <50) {
                //adulto
            img.setAttribute('src', 'homem-adulto.jpg')
            } else {
                //idoso
            img.setAttribute('src', 'homem-idoso.jpg')
            }            
            
        } else if (fsex[1].checked) {
            document.body.style.background= 'pink'
            genero ='Mulher'
            if (idade >= 0 && idade < 18) {
            //criança
            img.setAttribute('src', 'menina-crianca.jpg')
            } else if (idade < 50) {
            //adulto    
            img.setAttribute('src', 'mulher-adulta.jpg')
            } else {
                //idoso
            img.setAttribute('src', 'mulher-idosa.jpg')
            }
        }
        res.style.textAlign= 'center'
        res.innerHTML = `Você é ${genero} com ${idade} anos.`
        res.appendChild(img)
    }


}