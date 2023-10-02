function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  // pegar a imagem 
  const img = document.querySelector('#profile img')

  // substituir a imagem
  if(html.classList.contains('light')){
    img.setAttribute('src', './assets/avatar-light.jpg')
  } else {
    // se estiver sem o light mode 
    img.setAttribute('src', '././assets/profile.jpg')
  }  

}

