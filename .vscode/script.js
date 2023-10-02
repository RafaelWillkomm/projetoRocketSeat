function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  // pegar a imagem 
  const img = document.querySelector('#profile img')
  const p = document.querySelector('#profile p')

  // substituir a imagem
  if(html.classList.contains('light')) {
    img.setAttribute('src', './assets/avatar-light.jpg')
    // muda o nome para Goku PM
    p.textContent = "Goku PM"
  } else {
    // se estiver sem o light mode 
    img.setAttribute('src', '././assets/profile.jpg')
    p.textContent = 'Breeza'
  }  


}

