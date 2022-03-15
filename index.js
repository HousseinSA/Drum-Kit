//get the button from document
const button =  document.querySelectorAll("button")

//loop throught buttons numbers
for (let i=0; i<button.length;i++){
    //add event listener to each button
button[i].addEventListener("click",function(){
    //taking each button inner html aka letters
   const inner= this.innerHTML
   //giving button innerHtml to keys function as paramet
   keys(inner)
   buttonAnimation(inner)

})

}

// creating eventlistener for keypress
addEventListener("keypress",function(event){
    //adding keys function to keypress 
keys(event.key)
buttonAnimation(event.key)

})


// creating keys function with parametre key 
function keys(key){
    //creating switch condition for innerHtml of button 
    switch (key) {
        case "w":
            let sounds = new Audio("../DrumKit/sounds/0.mp3")
            sounds.play() 
            break;
            case "a":
            let sounds1 = new Audio("../DrumKit/sounds/1.mp3")
            sounds1.play() 
            break;
            case "s":
            let sounds2 = new Audio("../DrumKit/sounds/2.mp3")
            sounds2.play() 
            break;
            case "d":
            let sounds3 = new Audio("../DrumKit/sounds/3.mp3")
            sounds3.play() 
            break;
            case "j":
            let sounds4 = new Audio("../DrumKit/sounds/4.mp3")
            sounds4.play() 
            break;
            case "k":
            let sounds5 = new Audio("../DrumKit/sounds/5.mp3")
            sounds5.play() 
            break;
            case "l":
            let sounds6 = new Audio("../DrumKit/sounds/6.mp3")
            sounds6.play() 
            break;
    
        default:
            console.log("unkown key")
            break;
    }
}
  
function buttonAnimation(animation){
  let activebitch=document.querySelector("."+animation)
     activebitch.classList.add("pressed")
     setTimeout(function(){
         activebitch.classList.remove("pressed")
     },250)
}

