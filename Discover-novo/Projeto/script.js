function toggMode(){
    const html = document.documentElement
    // Verificando se na lista de classes do document html contém a classe light
    // if(html.classList.contains('light')){
    //     html.classList.remove('light')
    // }else{
    //     html.classList.add('light')
    // }

    html.classList.toggle('light')
}

toggMode()