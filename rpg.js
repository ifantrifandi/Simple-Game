instruction.addEventListener('click',function(){
    alert('Slay the Enemy! Enemy will drop money. Spawn the Enemy using New Enemy. Use Potion (20 Money) to Heal 50 HP. And Get the Highest Level Possible!')
})


let statusChar = {
    level : 1,
    basehp: 100,
    hp: 100,
    atk : 5 ,
    def : 5,
    exp : 100,
    money : 10
}

let statusEnemyChar = {
    hp : Math.ceil(Math.random() * 50) + 50,
    atk : Math.ceil(Math.random() * 3) + 2,
    def : Math.ceil(Math.random() * 3) + 2
}

if(statusChar.money < 20){
    potion.disabled = true
}else{
    potion.disabled = false
}

newEnemy.disabled = true

document.getElementById('my-level').innerText = statusChar.level
document.getElementById('my-hp').innerText = statusChar.hp
document.getElementById('my-atk').innerText = statusChar.atk
document.getElementById('my-def').innerText = statusChar.def
document.getElementById('my-exp').innerText = statusChar.exp
document.getElementById('my-money').innerText = statusChar.money
 
document.getElementById('enemy-hp').innerText = statusEnemyChar.hp
document.getElementById('enemy-atk').innerText = statusEnemyChar.atk
document.getElementById('enemy-def').innerText = statusEnemyChar.def


let atk = Math.ceil(statusChar.atk / statusEnemyChar.def * 5)
let def = Math.ceil(statusEnemyChar.atk / statusChar.def * 2)

let plusAtk = Math.ceil(Math.random() * statusChar.level) + 2 
let plusDef = Math.ceil(Math.random() * statusChar.level) + 2
let plusHp = Math.ceil(Math.random() * statusChar.level) + 5
let expGet = Math.ceil(Math.random() * 10) + 5


attack.addEventListener('click', function(){
    
    if(statusEnemyChar.hp < atk && statusChar.hp < def){
        statusChar.hp = statusChar.hp - statusChar.hp
        statusEnemyChar.hp = statusEnemyChar.hp - statusEnemyChar.hp     
        alert('Draw')
    }else if(statusEnemyChar.hp < atk){
        statusEnemyChar.hp = statusEnemyChar.hp - statusEnemyChar.hp     
        statusChar.hp = statusChar.hp - def
       
    }else if(statusChar.hp < def){
        statusChar.hp = statusChar.hp - statusChar.hp
        statusEnemyChar.hp = statusEnemyChar.hp - atk
        alert('You Lose')
        attack.disabled = true
        newEnemy.disabled = true
        potion.disabled = true
    }else{
        statusEnemyChar.hp = statusEnemyChar.hp - atk
        statusChar.hp = statusChar.hp - def
    }

    document.getElementById('enemy-hp').innerText = statusEnemyChar.hp
    document.getElementById('my-hp').innerText = statusChar.hp

    if(statusEnemyChar.hp <= 0){
        statusChar.exp = statusChar.exp - expGet
        document.getElementById('my-exp').innerText = statusChar.exp
        statusChar.money += Math.ceil(Math.random() * 5) + 2 * statusChar.level
        document.getElementById('my-money').innerText = statusChar.money
        alert('You Win')
        attack.disabled = true
        newEnemy.disabled = false

        if(statusChar.money < 20){
            potion.disabled = true
        }else{
            potion.disabled = false
        }

    }

    if(statusChar.exp <= 0){

        statusChar.level = statusChar.level + 1        
        statusChar.atk = statusChar.atk + plusAtk
        statusChar.def = statusChar.def + plusDef
        statusChar.basehp = statusChar.basehp + plusHp
        statusChar.hp = statusChar.basehp
        statusChar.exp = statusChar.level * 100
        document.getElementById('my-level').innerText = statusChar.level
        document.getElementById('my-hp').innerText = statusChar.hp
        document.getElementById('my-atk').innerText = statusChar.atk
        document.getElementById('my-def').innerText = statusChar.def
        document.getElementById('my-exp').innerText = statusChar.exp

    }
    
  
})


newEnemy.addEventListener('click',function(){

    attack.disabled = false
    statusEnemyChar.hp = Math.ceil(Math.random() * 20 * statusChar.level) + 40 * statusChar.level,
    statusEnemyChar.atk = Math.ceil(Math.random() * 3 * statusChar.level) + 2 * statusChar.level,
    statusEnemyChar.def = Math.ceil(Math.random() * 3 * statusChar.level) + 2 * statusChar.level

    document.getElementById('enemy-hp').innerText = statusEnemyChar.hp
    document.getElementById('enemy-atk').innerText = statusEnemyChar.atk
    document.getElementById('enemy-def').innerText = statusEnemyChar.def

    if(statusChar.money < 20){
        potion.disabled = true
    }else{
        potion.disabled = false
    }

    newEnemy.disabled = true
})

potion.addEventListener('click',function(){
       
    statusChar.hp += 50
    statusChar.money -= 20
    document.getElementById('my-hp').innerText = statusChar.hp
    document.getElementById('my-money').innerText = statusChar.money
    
    if(statusChar.money < 20){
        potion.disabled = true
    }else{
        potion.disabled = false
    }

    
})


