
/* This is the creation of the random numnber start*/  
const bodyPar = document.querySelector(".par-text");

const displayedPercentage = Math.floor(Math.random() * 103) + 1;

const fullPercentage = bodyPar.textContent = displayedPercentage;


//  alert(maleUserName.value)

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
  bothGender();
  
}
/*this function hides the input fields while the show function is activated*/ 
function hide(){
inputFields.style.display = "none";
gender.style.display = "none";

}


/*----------------------------------------*/

/*This is for the radio buttons */

const maleRadioBtn = document.querySelector("#male");

const femaleRadioBtn = document.querySelector("#female");

// submitBtn.addEventListener("click", maleAnswers )
// submitBtn.addEventListener("click", femaleAnswers )


function bothGender() {
  maleAnswers();
  femaleAnswers();
}


function maleAnswers() {
if (maleRadioBtn.checked){
  maleAns();
}

}




function femaleAnswers() {
  if (femaleRadioBtn.checked){
    femaleAns();
    
}

}


/*----------------------------------------*/











/*THE IF STATEMENTS FOR THE MALE ANSWERS*/

/*So the statement below show a range of different results depending on the range of the number*/


/*General responses for the calculator*/
/*
function generalAns() {
  if (displayedPercentage <20 ) {
    return  "Get the fuck out of here, you know that  is not fucking with  you bro. SHE  DON'T LIKE YOU BRO, GO GET A FUCKING LIFE DAMN."
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
}*/
// ansReturned.textContent = generalAns();




/*reload Button*/

const reloadBtn = document.querySelector(".reload-btn");


reloadBtn.addEventListener("click", reloadButton);


function reloadButton() {
  window.location.reload()
}
/****************************** */

const ansReturned = document.querySelector(".ans-returned");





function maleAns() {

  if (displayedPercentage < 20 ) {
    return ansReturned.textContent = "Get the fuck out of here, you know "+femaleUserName.value+" is not fucking with  you bro. SHE  DON'T LIKE YOU BRO, GO GET A FUCKING LIFE DAMN."
  }

  else if (displayedPercentage <= 35 && displayedPercentage >= 20) {
    return ansReturned.textContent = "Lol lmao, you really think "+femaleUserName.value+" likes you smh really? Get back to reality bro.."
  }
  else if (displayedPercentage <= 50 && displayedPercentage >= 35) {
    return ansReturned.textContent ="Okay, we are getting somewhere. Did you tell "+femaleUserName.value+" yet?  What are you waiting on?"
  }

  else if (displayedPercentage <= 80 && displayedPercentage >= 50) return ansReturned.textContent ="Yes my brother, "+femaleUserName.value+" should really know you have a crush on her. Stop being a (Simp)leton."

  else if (displayedPercentage <= 95 && displayedPercentage >= 80) {
    return ansReturned.textContent =" YAHHH!! City boys we up!! Bro at this point minimum "+femaleUserName.value+" should be getting dicked down."
  }

  else if (displayedPercentage <= 100 && displayedPercentage >= 95) {
    return ansReturned.textContent ="TF you doing here , get off here an go fuck that bicth. "+femaleUserName.value+" wants you. Damn."
  }

  else if (displayedPercentage > 101) {
    return ansReturned.textContent ="Fuck it, at this point the both of you and "+femaleUserName.value+" should have been already have a baby together already."
  }
}

/*The end of the male respondes*/


/*The start of the female respondes*/

function femaleAns() {
if (displayedPercentage < 20) {

  return ansReturned.textContent = "My friend tf you doing, you know that "+maleUserName.value+ " is not fucking with you . HE DON'T LIKE YOU, GO GET A LIFE."
}

else if (displayedPercentage <= 35 && displayedPercentage >=20 ){

return ansReturned.textContent = "Haha, you really think "+maleUserName.value+" likes you smh? Get back to reality lmao.."
}

else if (displayedPercentage <= 50 && displayedPercentage >=35){

return ansReturned.textContent = "Okay, we are getting somewhere. Did you tell "+maleUserName.value+" yet? What are you waiting on?"
}

else if (displayedPercentage <= 80 && displayedPercentage >=50){

return ansReturned.textContent = "Yes my sister, "+maleUserName.value+" should really know you like him."
}

else if (displayedPercentage <= 95 && displayedPercentage >= 80){

return ansReturned.textContent = " City girls we up!! At this point minimum "+maleUserName.value+" should be getting the gawk gawk 3000 from you."
}

else if (displayedPercentage <= 100 && displayedPercentage >= 95){

return ansReturned.textContent = "TF you doing here, get off here an go fuck that nigga.He wants you "
}

else if (displayedPercentage > 100){

return ansReturned.textContent = "Fuck it, at this point the both of you should have been already have baby together already."
}
}





/*The end of the female respondes*/

