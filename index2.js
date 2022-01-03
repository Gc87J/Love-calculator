
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
  
  alert(maleTesting)

};

function femaleRespond() {
  
  alert(femaleTesting)
}

function maleTesting(){
  if (2 + 2 === 4){
    alert("Lets go baby!")
  }
}

function femaleTesting() {

}




