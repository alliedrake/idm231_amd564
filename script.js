function fade2Content() {
console.log('fade2Content called');
document.body.classList.remove("blackScreen");
}


function myBirthday() {}

const andyObj = document.getElementById('ari');
const darrylObj = document.getElementById('tau');
const kellyObj = document.getElementById('gem');
const jimObj = document.getElementById('can');
const mikeObj = document.getElementById('leo');
const angelaObj = document.getElementById('vir');
const phyllisObj = document.getElementById('lib');
const dwightObj = document.getElementById('sco');
const ryanObj = document.getElementById('sag');
const stanleyObj = document.getElementById('cap');
const oscarObj = document.getElementById('aqu');
const pamObj = document.getElementById('pis');


andyObj.addEventListener('click', function (evt) {
    console.log('andy button clicked' + evt.target.id); 
    const idName = evt.target.id;
    userPicked(idName);
});

angelaObj.addEventListener('click', function (evt) {
    console.log('angela button clicked' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
});

dwightObj.addEventListener('click', function (evt) {
    console.log('dwight button clicked' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
});

jimObj.addEventListener('click', function (evt) {
    console.log('jim button clicked' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
});

mikeObj.addEventListener('click', function (evt) {
    console.log('michael button clicked' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
});

oscarObj.addEventListener('click', function (evt) {
    console.log('oscar button clicked' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
});

pamObj.addEventListener('click', function (evt) {
    console.log('pam button clicked' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
});

phyllisObj.addEventListener('click', function (evt) {
    console.log('phyllis button clicked' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
});

ryanObj.addEventListener('click', function (evt) {
    console.log('ryan button clicked' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
});

darrylObj.addEventListener('click', function (evt) {
    console.log('darryl button clicked' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
});

kellyObj.addEventListener('click', function (evt) {
    console.log('kelly button clicked' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
});

stanleyObj.addEventListener('click', function (evt) {
    console.log('stanley button clicked' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
});



const userSubmitObj = document.getElementById('userSubmit');

userSubmitObj.addEventListener('click', function () {
    console.log('submitButton clicked');
  
const userFirstName = document.getElementById('fname').value;
console.log('userFirstName is: ' + userFirstName);

const userBday = new Date(document.getElementById('bday').value);
console.log('userBday is: ' + userBday);

let whichMonth = userBday.getUTCMonth();
whichMonth++;
console.log('whichMonth is: ' + whichMonth);

const whichDayOfMonth = userBday.getUTCDate();
console.log('whichDayOfMonth is: ' + whichDayOfMonth);
  
let AstroSign = "";


if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
    AstroSign = "cap";
  } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
    AstroSign = "sag";
  } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
    AstroSign = "sco";
  } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
    AstroSign = "lib";
  } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
    AstroSign = "vir";
  } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
    AstroSign = "leo";
  } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
    AstroSign = "can";
  } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
    AstroSign = "gem";
  } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
    AstroSign = "tau";
  } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
    AstroSign = "ari";
  } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
    AstroSign = "pis";
  } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
    AstroSign = "aqu";
  }

  console.log('AstroSign is ' + AstroSign);

});



/* function userPicked(whichOne) { 
    switch (whichOne) {
        case 'ari':
          display
    
    }

}
*/