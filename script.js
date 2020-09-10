function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = window.document.querySelector('input#txtano')
    var res = window.document.querySelector('div#res')
    // verefica se o valor da caixa esta vazia e se valor digitado é maior que a variavel
    if(fano.value.length == 0 || fano.value > ano){ 
        window.alert("[ERRO] Essa pessoa ainda nao nasceu ou voce não digitou!")
    }else{
       var fsex = window.document.getElementsByName('radsex');
       var idade = ano - Number.parseInt(fano.value);
       var img = window.document.createElement('img');
       img.setAttribute('id', 'foto');
       var genero = '';
       if (fsex[0].checked){
           genero = "Homem";
           if(idade <= 12){
              img.setAttribute('src', 'img/menino.png');
           } else if(idade <= 20){
            img.setAttribute('src', 'img/garoto.png');
           }else if(idade <= 55){
            img.setAttribute('src', 'img/adulto.png');
           }else if(idade >55){
            img.setAttribute('src', 'img/idoso.png');
           }
       }else{
           genero = "Mulher";
           if(idade <= 12){
            img.setAttribute('src', 'img/menina.png');
         } else if(idade <= 20){
          img.setAttribute('src', 'img/garota.png');
         }else if(idade <= 55){
          img.setAttribute('src', 'img/adulta.png');
         }else if(idade >55){
          img.setAttribute('src', 'img/idosa.png');
         }
       }
       //res.style.textAlign = "center"; (centralizando texto pelo JS).
       res.innerHTML = `${genero} de ${idade} anos`
       res.appendChild(img);// Faz a imagem aparecer.
    }
}