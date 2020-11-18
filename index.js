// var button = document.querySelector("button");
//         var isPurple = false;//first the background color is white
       
//         button.addEventListener("click",function(){
//         if (isPurple){
//             document.body.style.backgroundColor = "white";// background color changes to purple from white
//             isPurple = false;
//         }
//         else{
//             document.body.style.backgroundColor = "purple";// background color changes from purple to white
//             isPurple = true;// now it becomes true and in if condition true condition is acecessed.
//         }
// });
// of events of udemy course
// var para = document.querySelector("p");
// var button = document.querySelector("button");
// var para1 = false;

// button.addEventListener("click",function(){
//     if(para1){
//         para.textContent = "bye bye everyone";
//         para1 = false;
//     }
//     else{
//         para.textContent = "hello everyone";
//         para1 = true;
//     }
    
// });

var width = 100;
var difference = 2;
var intervalId = 0;
function expand(){
    clearInterval(intervalId);
    intervalId = setInterval(big,20);//function and time are set as arguments in the function
}
function big(){
    if (width<200){
        width=width+difference;
        document.getElementById("img1").style.width=width;
    }
    else{
        clearInterval(intervalId);
    }
}
function contract(){
    clearInterval(intervalId);
    intervalId = setInterval(small,20);//function and time are set as arguments in the function
}
function small(){
    if (width>100){
        width=width-difference;
        document.getElementById("img1").style.width=width;
    }
    else{
        clearInterval(intervalId);
    }
}