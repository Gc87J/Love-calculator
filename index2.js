
/* This is the creation of the random numnber start*/  
const bodyPar = document.querySelector(".par-text");

const displayedPercentage = Math.floor(Math.random() * 103) + 1;

const fullPercentage = bodyPar.textContent = displayedPercentage;


alert("I hope you Have Fun :)")

/*This is the creation of the random number end*/

/* This is the input field    */
let maleUserName = document.querySelector(".male-input-field");

let femaleUserName = document.querySelector(".female-input-field");


/*This is the button lets the results pop up on the website*/

const bodyPara = document.querySelector(".body-par");

 
const submitBtn = document.querySelector(".input-btn");

const inputFields = document.querySelector(".main-input-parent");

const gender = document.querySelector(".checkboxs-parent");

submitBtn.addEventListener("click", show);
submitBtn.addEventListener("click", hide);


function show(){
  bodyPara.style.display = "flex";
  ansReturned.style.display = "block";
  reloadBtn.style.display = "block";
}
/*this function hides the input fields while the show function is activated*/ 
function hide(){
inputFields.style.display = "none";
gender.style.display = "none";

}


/*----------------------------------------*/

/*This is for the radio buttons */
/*
const maleRadioBtn = document.querySelector("#male");

const femaleRadioBtn = document.querySelector("#female");



maleRadioBtn.addEventListener("click", maleAnswers);

femaleRadioBtn.addEventListener("click", femaleAnswers);


function maleAnswers() {


}

function femaleAnswers() {

}
*/
/*----------------------------------------*/











/*THE IF STATEMENTS FOR THE MALE ANSWERS*/

/*So the statement below show a range of different results depending on the range of the number*/
const ansReturned = document.querySelector(".ans-returned");

/*General responses for the calculator*/

function generalAns() {
  if (displayedPercentage < 20) {
    return "Get the fuck out of here, you know that she is not fucking with you bro. SHE  DON'T LIKE YOU BRO, GO GET A FUCKING LIFE DAMN."
  }

  else if (displayedPercentage <= 35 && displayedPercentage >= 20) {
    return "Lol lmao, you really think she likes you smh really? Get back to reality bro.."
  }

  else if (displayedPercentage <= 50 && displayedPercentage >= 35) {
    return "Okay, we are getting somewhere. Did you tell her yet?  What are you waiting on?"
  }

  else if (displayedPercentage <= 80 && displayedPercentage >= 50) return "Yes my brother, she should really know you have a crush on her. Stop being a Simpleton."

  else if (displayedPercentage <= 95 && displayedPercentage >= 80) {
    return " YAHHH!! City boys we up!! Bro at this point minimum she should be getting dicked down."
  }

  else if (displayedPercentage <= 100 && displayedPercentage >= 95) {
    return "TF you doing here , get off here an go fuck that bicth. She wants you. Damn."
  }

  else if (displayedPercentage > 101) {
    return "Fuck it, at this point the both of you should have been already have a baby together already."
  }
}


ansReturned.textContent = generalAns(); 


/*reload Button*/

const reloadBtn = document.querySelector(".reload-btn");


reloadBtn.addEventListener("click", reloadButton);


function reloadButton() {
  window.location.reload()
}








/*
function maleAns() {
    if(displayedPercentage < 20 ){

    return  "Nigga get tf outa here, you know that is not fucking with you bro. SHE DON'T LIKE YOU BRO, GO GET A LIFE."
    }


else if ( displayedPercentage <= 35 && displayedPercentage >=20 ) {

  return "Haha, you really think  likes you smh? Get back to reality bro.. "
}  

else if (displayedPercentage <= 50 && displayedPercentage >=35) {

  return "Okay, we are getting somewhere. Did you tell  yet? What are you waiting on?"
}  

else if (displayedPercentage <= 80 && displayedPercentage >=50) {

  return "Yes my brother,  should really know you like her."
}  

else if (displayedPercentage <= 95 && displayedPercentage >= 80) {

  return "City boys we up!! Bro at this point minimum she is getting dicked down."
}  

else if (displayedPercentage <= 100 && displayedPercentage >= 95) {

  return "TF you doing here bro, get off here an go fuck that bicth. She wants you"
}  

else if (displayedPercentage > 100) {

  return "Fuck it, at this point the both of you should have been already have baby together already."
} 
} 


ansReturned.textContent = maleAns();
*/



/*The end of the male respondes*/


/*The start of the female respondes*/
/*
function femaleAns(){
if (percentage < 20) {

  return "My friend tf you doing, you know that "+maleUserName+ " is not fucking with you . HE DON'T LIKE YOU, GO GET A LIFE."
}

else if (percentage <= 35 && percentage >=20 ){

return "Haha, you really think "+maleUserName+" likes you smh? Get back to reality lmao.."
}

else if (percentage <= 50 && percentage >=35){

return "Okay, we are getting somewhere. Did you tell "+maleUserName+" yet? What are you waiting on?"
}

else if (percentage <= 80 && percentage >=50){

return "Yes my sister, "+maleUserName+" should really know you like him."
}

else if (percentage <= 95 && percentage >= 80){

return " City girls we up!! At this point minimum "+maleUserName+" should be getting the gawk gawk 3000 from you."
}

else if (percentage <= 100 && percentage >= 95){

return "TF you doing here, get off here an go fuck that nigga.He wants you "
}

else if (percentage > 100){

return "Fuck it, at this point the both of you should have been already have baby together already."
}
}

*/



/*The end of the female respondes*/

