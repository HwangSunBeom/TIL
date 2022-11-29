const alert = document.getElementById('alert')
const button = document.getElementById('button')
const close = document.getElementById('close')

alert.style.display = 'none';


button.addEventListener('click', ()=>{
    alert.style.display = 'block'; 
})

close.addEventListener('click', ()=>{
    alert.style.display = 'none';
})