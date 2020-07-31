
document.getElementById('button-light-dark').addEventListener('click',function(){
    
    if(document.body.className === 'light-mode'){
        document.body.className = 'dark-mode'
        document.getElementById('button-light-dark').value = 'Dark'    
    }else{
        document.body.className = 'light-mode'
        document.getElementById('button-light-dark').value = 'Light'
    }
})