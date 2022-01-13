
/* This is the creation of the random numnber start*/

  
const percentage = document.querySelector(".body-par");

const fullPercentage = percentage.textContent = Math.floor(Math.random() * 103) + 1;


 
const submitBtn = document.querySelector("h2");

submitBtn.addEventListener("click",show);




function show(){
  fullPercentage.style.display = "flex";
}


/*This is the creation of the random number end*/



/* start */
/*
let maleUserName = document.querySelector(".male-input-field")

let femaleUserName = document.querySelector(".female-input-field")

let submitBtn = document.querySelector(".input-btn")

submitBtn.addEventListener("click", submitted )

function submitted(){
if (percentage < 20) {

  return "LETS GO BABY"
}
};
*/

/* end */




/*This is foe the male button start*/
/*

let male = document.querySelector("#male")

let female = document.querySelector("#female")

male.addEventListener("click", maleRespond)

female.addEventListener("click",femaleRespond )

function randomNumber() {

 let n = Math.random();
 n = n * 102 + 1;
 rndNum = Math.floor(n)
 

}
alert(rndNum)

function maleRespond() {
  
  

};

function femaleRespond() {
  
  
}

function maleTesting(){
  
  
}  

function femaleTesting() {
  
} 

/*Below here is the code for the section that shows the respondes*/
/*
let completeAnswer = document.querySelector(".user-answer")



completeAnswer.innerHTML 
*/


/*Above here is the code for the section that shows the respondes*/



/*This is the end of the male button function*/

/*THE IF STATEMENTS FOR THE MALE ANSWERS*/

/*
if ( percentage < 20 ) {

return "Nigga get tf outa here, you know that"+ femaleUserName+ " is not fucking with you bro. SHE DON'T LIKE YOU BRO, GO GET A LIFE."  
}

else if (percentage <= 35 && >=20 ) {

  return "Haha, you really think "+femaleUserName+ " likes you smh? Get back to reality bro.. "
}  

else if (percentage <= 50 && >=35) {

  return "Okay, we are getting somewhere. Did you tell "+femaleUserName+ " yet? What are you waiting on?"
}  

else if (percentage <= 80 && >=50) {

  return "Yes my brother, "+femaleUserName+" should really know you like her."
}  

else if (percentage <= 95 && >= 80) {

  return "City boys we up!! Bro at this point minimum"+femaleUserName+" she is getting dicked down."
}  

else if (percentage <= 100 && >= 95) {

  return "TF you doing here bro, get off here an go fuck that bicth. She wants you"
}  

else if (percentage > 100) {

  return "Fuck it, at this point the both of you should have been already have baby together already."
}  
*/

/*The end of the male respondes*/


/*The start of the female respondes*/
/*
if (percentage < 20) {

  return "My friend tf you doing, you know that "+maleUserName+ " is not fucking with you . HE DON'T LIKE YOU, GO GET A LIFE."
}

else if (percentage <= 35 && >=20 ){

return "Haha, you really think "+maleUserName+" likes you smh? Get back to reality lmao.."
}

else if (percentage <= 50 && >=35){

return "Okay, we are getting somewhere. Did you tell "+maleUserName+" yet? What are you waiting on?"
}

else if (percentage <= 80 && >=50){

return "Yes my sister, "+maleUserName+" should really know you like him."
}

else if (percentage <= 95 && >= 80){

return " City girls we up!! At this point minimum "+maleUserName+" should be getting the gawk gawk 3000 from you."
}

else if (percentage <= 100 && >= 95){

return "TF you doing here, get off here an go fuck that nigga.He wants you "
}

else if (percentage > 100){

return "Fuck it, at this point the both of you should have been already have baby together already."
}

*/


/*The end of the female respondes*/


