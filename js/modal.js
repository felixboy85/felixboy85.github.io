let nameField = document.getElementById('name')
let email = document.getElementById('email')
let form = document.getElementById('form')
let button = document.getElementById('button')

button.addEventListener('submit', (e) => {  
    e.preventDefault()
    if (nameField === '') {  
        console.log('error');
    } 
})
