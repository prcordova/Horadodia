function carregar() {
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var header = document.getElementById('header')
var hora = data.getHours()
 
 

if(hora >= 6 && hora < 12){
    msg.innerHTML = `Bom dia, agora são ${hora} horas.`
    // Bom dia!
    img.src = `fotomanha.png`
    document.body.style.background = '#eff0ef'
    header.style.color ='#000'
    
    

} else if(hora >= 12 && hora <= 18) {
    msg.innerHTML = `Boa tarde, agora são ${hora} horas.`
    // boa tarde
    img.src = `fototarde.png`
    document.body.style.background = '#c3a08a'
} else {
    msg.innerHTML = `Boa noite, agora são ${hora} horas.`
    // boa noite
    img.src = `fotonoite.png` 
    document.body.style.background = '#083641'
}

}
