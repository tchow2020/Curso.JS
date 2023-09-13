function toggMode(){
    // Verificando se na lista de classes do document html contém a classe light
    const html = document.documentElement
    html.classList.toggle('light')

    // pegar a tag img
    const img = document.querySelector("#profile img")

    // substituir a imagem
    if(html.classList.contains('light')){
        // se tiver o light mode, adicionar a imagem light
        img.setAttribute('src', './assets/Gojo.gif')
    }else{
        // se não tiver o light mode, manter a imagem normal
        img.setAttribute('src', './assets/vinland-saga.gif')
    }
}

toggMode()