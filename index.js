document.querySelector('.fa-eye').addEventListener('click', () =>{
    
    let inputPassword = document.querySelector('#senha')

    if(inputPassword.getAttribute('type') == 'password'){
        inputPassword.setAttribute('type', 'text')
    
    } else{
        inputPassword.setAttribute('type', 'password')
    }
})

let inputUserName = document.querySelector('#login')
let inputUserEmail = document.querySelector('#email')
let inputUserPassword = document.querySelector('#senha')

let labelUserName = document.querySelector('#labelUser')
let labelUserEmail = document.querySelector('#labelEmail')
let LabelUserPassword = document.querySelector('#labelPassword')



inputUserName.addEventListener('keyup', () => {

    if(inputUserName.value.length >= 4){
        
        labelUserName.setAttribute('style', 'color: green')
    } else{
        labelUserName.setAttribute('style', 'color: rgb(100, 20, 210)')
    } 
})

console.log(inputUserEmail.value)

inputUserEmail.addEventListener('keyup', () => {
    if(inputUserEmail.value.includes('@')){
        labelUserEmail.setAttribute('style', 'color: green')
    } else{
        labelUserEmail.setAttribute('style', 'color: rgb(100, 20, 210)')
    }
})

inputUserPassword.addEventListener('keyup', () => {

    if(inputUserPassword.value.length >= 6){
        LabelUserPassword.setAttribute('style', 'color: green')
    } else{
        LabelUserPassword.setAttribute('style', 'color: rgb(100, 20, 210)')
    }
})
