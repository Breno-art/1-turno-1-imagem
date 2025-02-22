function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minuto}`
    if(hora >= 0 && hora <12){
        img.src = "manha.png"
        document.body.style.background = "rgb(248, 188, 128)"
        document.getElementById("retangulo").style.background = "#c6c4bf"
    }else if(hora >= 12 && hora < 17){
        img.src = "dia.png"
        document.body.style.background = "#7bc0d5"
        document.getElementById("retangulo").style.background = "#197b9d"
    }else if(hora >= 17 && hora < 19){
        img.src = "tarde.png"
        document.body.style.background = "#f07e17"
        document.getElementById("retangulo").style.background = "#c06b2e"
    }else{
        img.src = "noite.png"
        document.body.style.background = "#217577"
        document.getElementById("retangulo").style.background = "#133a3a"
    }
    if(minuto >= 0 && minuto < 10){
        msg.innerHTML = `Agora são ${hora}:0${minuto}`
    }
}