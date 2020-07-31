instruction.addEventListener('click',function(){
    alert('To Play You need W key and O key. Press W for Red Box and Press O for Blue Box.')})

var redBox = document.getElementById('red-box')
var blueBox = document.getElementById('blue-box')

countBlue = 5
countRed = 5

redBox.style.marginLeft = `${countRed}px`
blueBox.style.marginLeft = `${countBlue}px`

document.addEventListener("keyup", function(event){

    if(event.code === 'KeyW'){
        countRed += 20 
        redBox.style.marginLeft = `${countRed}px`      
    }else{
        countRed += 0
    }
     
    if(event.code === 'KeyO'){
        countBlue += 20 
        blueBox.style.marginLeft = `${countBlue}px`      
    }else{
        countBlue += 0
    }

    if(countRed > 1000){
        alert('RED WIN')
        redBox.style.marginLeft = '5px' 
        blueBox.style.marginLeft = '5px'
        countRed = 5
        countBlue = 5
    }else if(countBlue > 1000){
        alert('BLUE WIN')
        blueBox.style.marginLeft = '5px'
        redBox.style.marginLeft = '5px'
        countRed = 5
        countBlue = 5
    }
})