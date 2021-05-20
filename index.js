const botao = document.querySelector('button')
botao.addEventListener('click', transform)

function transform(){
    let nome = document.querySelector('#name')
    let email = document.querySelector('#email')

   return mostrar(nome.value, email.value)
}

function mostrar(dado1 , dado2){
    var dado1 , dado2
    let apagar = document.querySelector('#div1')
    apagar.textContent = ''
    let show = document.querySelector('#div2')
     show = document.createElement('p')
     show.textContent = 'Nome: ' + dado1 
     let show1 = document.createElement('p')
     show1.textContent = 'Email: ' + dado2
    let voce = document.createElement('p')
    voce.textContent = 'Você Foi Descadastrado'

     document.body.appendChild(show)
     document.body.appendChild(show1)
     document.body.appendChild(voce)
    }