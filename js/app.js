
'use strict';
let score = 0;

function aboutme() {
  let yourName = prompt('do my name consist of more than four letters?');
  if (yourName.toLowerCase() === 'yes' || yourName.toLowerCase() === 'y') {
    alert('wow same to me')
    score++;
  } else if (yourName.toLowerCase() === 'no' || yourName.toLowerCase() === 'n') {
    alert('you are different to me')
  } 
    else{ alart('thanks');
  }
  console.log(yourName);
}
// aboutme();

function age() {

  let youHungry = prompt('how old am I?');
  if (youHungry.toLowerCase() === 'yes' || youHungry.toLowerCase() === 'y') {
    alert('right')
    score++;
  } else if (youHungry.toLowerCase() === 'no' || youHungry.toLowerCase() === 'n') {
    alert('wrong')
  } else {
    alert('thanks');
  }
  console.log(youHungry);
}

// age();

function movie() {
  let Movie = prompt('have I ever watch movie?');
  if (Movie.toLowerCase() === 'yes' || Movie.toLowerCase() === 'y') {
    alert('right')
    score++;
  } else if (Movie.toLowerCase() === 'no' || Movie.toLowerCase() === 'n') {
    alert('wrong')
  } else{ alart('thanks');}
  console.log(Movie);

}
// movie();

function tired() {
  let tired = prompt('am I tired?');
  if (tired.toLowerCase() === 'yes' || tired.toLowerCase() === 'y') {
    alert('right')
    score++;
  } else if (tired.toLowerCase() === 'no' || tired.toLowerCase() === 'n') {
    alert('wrong')
  } else {
    alert('thanks');
  }
  console.log(tired);
}
// tired();

function Travel() {

  let traval = prompt('have I ever traval?');
  if (traval.toLowerCase() === 'yes' || traval.toLowerCase() === 'y') {
    alert('thats right')
    score++;
  } else if (traval.toLowerCase() === 'no' || traval.toLowerCase() === 'n') {
    alert('thats wrong')
  } else {
    alert('thanks');
  }
  console.log(traval);
}

// Travel();


function favNum() {
  let favNum = 2;
  for (let i = 0; i <= 4; i++) {
    let guess = prompt('what my faverate number?');

    if (parseInt(guess) === favNum) {
      alert('thats right')
      score++;
      break;
    } else if (parseInt(guess) < favNum) {
      alert('too low')
    } else if (parseInt(guess) > favNum) {
      alert('too high')
    } else {
      alert('good luck')
    }
    console.log(guess);
  }
  alert(favNum)
}

// favNum();

// let prands = ['gucci', 'zara', 'chanel', 'coach', 'Christian Dior']

let prand = ['gucci', 'zara', 'chanel', 'coach', 'Christian Dior'];
let found=false;
let myprand;
function prands(){
    for(let i=1;i<=6;i++){ 
         myprand=prompt('what your faverat prand?');
    for(let j=0; j < prand.length; j++){ 
           if(myprand===prand[j]){ 
                    found=true;   
                         alert('you win');  
                                   
                                   break; 
                                  }  
                                  }    if(found===true){  
                                        alert('the right answer  '+prand);   
                                           break; 
                                             }  }}

// function prand() {
  // let prand = ['gucci', 'zara', 'chanel', 'coach', 'Christian Dior']
//   let found = false;
//   for (let x = 0; x < 6; x++) {
//     let favPrand = prompt('what is my favourite prand');
//     for (let y = 0; y < prand.length; y++) {
//       if (favPrand === prand[y]) {
//         alert('thats right');
//         console.log(favPrand);
//         found = true;
//         score++;
//         break;
//       }
//     }
//     if (found === true) {
//       break;
//     }
//   }
 
// }
function Name(){
  let yourName = prompt('what your name?');
  alert(`welcome ${yourName} in my page your scores ${score}`);
  alert(yourName);

}
aboutme();
age();
movie();
tired();
Travel();
favNum();
prands();
Name();

  // document.write(prand);
  

  


