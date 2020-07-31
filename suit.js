let enemyWeapon = ''


let rock = document.getElementById('rock')
let paper = document.getElementById('paper')
let scissor = document.getElementById('scissor')

let yourChoice = ''

rock.addEventListener('click',function(){
    let enemyChoice = Math.floor(Math.random() * 3)
    
    switch(enemyChoice){
        case 0 :
            enemyWeapon = 'Rock'
            document.getElementById('rock-image').style.display = 'block'
            document.getElementById('paper-image').style.display = 'none'
            document.getElementById('scissor-image').style.display = 'none'
            
            break;
        case 1 :
            enemyWeapon = 'Paper'
            document.getElementById('rock-image').style.display = 'none'
            document.getElementById('paper-image').style.display = 'block'
            document.getElementById('scissor-image').style.display = 'none'
            break;
        case 2 :
            enemyWeapon = 'Scissor'
            document.getElementById('rock-image').style.display = 'none'
            document.getElementById('paper-image').style.display = 'none'
            document.getElementById('scissor-image').style.display = 'block'
            break;
    }

    yourChoice = rock.value
   
    document.getElementById('my-choice').style.display = 'block'
    document.getElementById('my-rock-image').style.display = 'block'
    document.getElementById('my-paper-image').style.display = 'none'
    document.getElementById('my-scissor-image').style.display = 'none'

    if(yourChoice === enemyWeapon){
        alert('Draw')
    }else if(yourChoice === 'Rock' && enemyWeapon === 'Scissor'){
        alert('You Win')
    }else if(yourChoice === 'Paper' && enemyWeapon === 'Rock'){
        alert('You Win')
    }else if(yourChoice === 'Scissor' && enemyWeapon === 'Paper'){
        alert('You Win')
    }else{
        alert('You Lose')
    }

})

paper.addEventListener('click',function(){
    let enemyChoice = Math.floor(Math.random() * 3)

    switch(enemyChoice){
        case 0 :
            enemyWeapon = 'Rock'
            document.getElementById('rock-image').style.display = 'block'
            document.getElementById('paper-image').style.display = 'none'
            document.getElementById('scissor-image').style.display = 'none'
            
            break;
        case 1 :
            enemyWeapon = 'Paper'
            document.getElementById('rock-image').style.display = 'none'
            document.getElementById('paper-image').style.display = 'block'
            document.getElementById('scissor-image').style.display = 'none'
            break;
        case 2 :
            enemyWeapon = 'Scissor'
            document.getElementById('rock-image').style.display = 'none'
            document.getElementById('paper-image').style.display = 'none'
            document.getElementById('scissor-image').style.display = 'block'
            break;
    }

    yourChoice = paper.value

    document.getElementById('my-paper-image').style.display = 'block'
    document.getElementById('my-rock-image').style.display = 'none'
    document.getElementById('my-scissor-image').style.display = 'none'

    document.getElementById('my-choice').style.display = 'block'

    if(yourChoice === enemyWeapon){
        alert('Draw')
    }else if(yourChoice === 'Rock' && enemyWeapon === 'Scissor'){
        alert('You Win')
    }else if(yourChoice === 'Paper' && enemyWeapon === 'Rock'){
        alert('You Win')
    }else if(yourChoice === 'Scissor' && enemyWeapon === 'Paper'){
        alert('You Win')
    }else{
        alert('You Lose')
    }
})

scissor.addEventListener('click',function(){
    let enemyChoice = Math.floor(Math.random() * 3)

    switch(enemyChoice){
        case 0 :
            enemyWeapon = 'Rock'
            document.getElementById('rock-image').style.display = 'block'
            document.getElementById('paper-image').style.display = 'none'
            document.getElementById('scissor-image').style.display = 'none'
            
            break;
        case 1 :
            enemyWeapon = 'Paper'
            document.getElementById('rock-image').style.display = 'none'
            document.getElementById('paper-image').style.display = 'block'
            document.getElementById('scissor-image').style.display = 'none'
            break;
        case 2 :
            enemyWeapon = 'Scissor'
            document.getElementById('rock-image').style.display = 'none'
            document.getElementById('paper-image').style.display = 'none'
            document.getElementById('scissor-image').style.display = 'block'
            break;
    }

    yourChoice = scissor.value
    
    document.getElementById('my-scissor-image').style.display = 'block'
    document.getElementById('my-rock-image').style.display = 'none'
    document.getElementById('my-paper-image').style.display = 'none'
    document.getElementById('my-choice').style.display = 'block'

    if(yourChoice === enemyWeapon){
        alert('Draw')
    }else if(yourChoice === 'Rock' && enemyWeapon === 'Scissor'){
        alert('You Win')
    }else if(yourChoice === 'Paper' && enemyWeapon === 'Rock'){
        alert('You Win')
    }else if(yourChoice === 'Scissor' && enemyWeapon === 'Paper'){
        alert('You Win')
    }else{
        alert('You Lose')
    }
}) 

instruction.addEventListener('click',function(){
    alert('Choose Rock, Paper or Scissor. The enemy will choose their choice. How to Win? Rock-> Scissor -> Paper -> Rock')
})