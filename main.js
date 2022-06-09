// var box1 = document.getElementById("box");
// box1.style.width= "30vw";
// box1.style.backgroundColor="red";
// var distance = 0 ;

// function moveBox(){
//   intervalId= setInterval(()=>{
//     box1.style.height = distance++ + "vh"
//   },100)
// }
// function start(){
//   moveBox()
// }

function stop(){
  clearInterval(intervalId)
}
// function enterCancel(e){
//   if(e.key == "Enter"){
//     stop()
//   }
// }

// var box2 = document.getElementById("box2")
// box2.style.height = "30px"
// box2.style.width = "30px"
// box2.style.backgroundColor = "blue"
// function changeColor(){
  
//     var rColor = Math.floor(Math.random()*100)
//     var gColor = Math.floor(Math.random()*100)
//     var bColor = Math.floor(Math.random()*100)
 
//     box2.style.backgroundColor = "rgb("+rColor+","+gColor+","+bColor+")"

  
// }

// var heightFromUser = document.getElementById("userHeight")
// var widthFromUser = document.getElementById("userWidth")
// var box3 = document.getElementById("box3")
// box3.style.backgroundColor = "blue"
// box3.style.height = "15px"
// box3.style.width = "15px"


// var counter = 0 ;
// function createShape(){
//   intervalId=setInterval(()=>{
//     if(counter == heightFromUser.value && counter == widthFromUser.value){
//       box3.style.width = counter++ + "px";
//       box3.style.height = counter++ + "px";
//       stop()
//     }
//     box3.style.width = counter++ + "px";
//       box3.style.height = counter++ + "px";
//   },100)

// }
// function stopAnimation(e){
//   if(e.key == " "){
//     stop()
//   }
// }


