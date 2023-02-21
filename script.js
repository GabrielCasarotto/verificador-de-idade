function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var mes = data.getMonth()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente')
    }

    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var idade2 = mes + 1
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            genero = 'Homem'
            if(idade >=0 && idade < 10){
                //criança
                if (idade == 1){
                    res.innerHTML = 'detectamos um menino de 1 ano'
                    img.setAttribute('src', 'imagens/crianca-menino.jpg')
                }

                else if (idade <= 0) {
                    if (idade2 == 1){
                        img.setAttribute('src', 'imagens/crianca-menino.jpg')
                        res.innerHTML = 'Detectamos um menino de 1 mês'

                    }

                    else{
                        img.setAttribute('src', 'imagens/crianca-menino.jpg')
                        res.innerHTML = `Detectamos um menino de ${idade2}  meses`
                    }
                    
                }

                else{
                    img.setAttribute('src', 'imagens/crianca-menino.jpg')
                    res.innerHTML = `Detectamos um menino de ${idade} anos`
                }
            
            }

            else if(idade < 28) {
                //jovem
                img.setAttribute('src', 'imagens/homem-jovem.jpg')
                res.innerHTML = `Detectamos ${genero} jovem com ${idade} anos`
            }

            else if(idade < 60 ) {
                //adulto
                img.setAttribute('src', 'imagens/homem-adulto.jpg')
                res.innerHTML = `Detectamos ${genero} adulto com ${idade} anos`
            }

            else{
                //idoso
                img.setAttribute('src', 'imagens/homem-idoso.jpg')
                res.innerHTML = `Detectamos ${genero} idoso com ${idade} anos`
            }

        }
        
        else if(fsex[1].checked){
            genero = 'Mulher'

            if(idade >= 0 && idade < 10) {
                //criança
                if(idade == 1){
                    img.setAttribute('src', 'imagens/crianca-menina.jpg')
                    res.innerHTML = `Detectamos uma menina de 1 ano`
                }

                else if(idade <=0){

                    if (idade2 == 1){
                        img.setAttribute('src', 'imagens/crianca-menina.jpg')
                        res.innerHTML = 'Detectamos uma menina de 1 mês'

                    }

                    else{
                        img.setAttribute('src', 'imagens/crianca-menina.jpg')
                        res.innerHTML = `Detectamos uma menina de ${idade2}  meses`
                    }

                }

                else{
                    img.setAttribute('src', 'imagens/crianca-menina.jpg')
                    res.innerHTML = `Detectamos uma menina de ${idade} anos`
                }
                
            }

            else if(idade < 28) {
                //jovem
                img.setAttribute('src', 'imagens/mulher-jovem.jpg')
                res.innerHTML = `Detectamos uma ${genero} jovem com ${idade} anos`
            }

            else if(idade < 60) {
                //adulta
                img.setAttribute('src', 'imagens/mulher-adulta.jpg')
                res.innerHTML = `Detectamos uma ${genero} adulta com ${idade} anos`

            }

            else{
                //idosa
                img.setAttribute('src', 'imagens/mulher-idosa.jpg')
                res.innerHTML = `Detectamos uma ${genero} idosa com ${idade} anos`
            }

        }

        
        res.appendChild(img)

    }

    
}