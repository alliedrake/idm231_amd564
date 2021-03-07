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

const displayObj = document.getElementById('display');


// Calendar Input //

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

  userPicked(AstroSign);

});

// Modal Control


const modal = document.getElementById('modal');
const closeModalObj = document.getElementById('btn-modal-close');
closeModalObj.addEventListener('click', function() {
  console.log('Close this modal!');
  stopAllAudio();
  modal.hidden = !modal.hidden;
});

const zDisplayImgObj = document.getElementById('zDisplayImg');
const zTitleObj = document.getElementById('zTitle');
const zDateRangeObj = document.getElementById('zDateRange');
const zMoreInfoObj = document.getElementById('zMoreInfo');



function userPicked(whichOne) {
  console.log('userPicked called: ' + whichOne);

  switch (whichOne) {
    case 'ari':
      zDisplayImgObj.src = "images/andybernardcircle.png";
      // title
      zTitleObj.innerHTML = "<h1>Andy Bernard</h1>";
      // date range
      zDateRangeObj.innerHTML = "<h2>March 20th - April 19th</h2>";
      // description
      zMoreInfoObj.innerHTML = "<p>Just like Andy, you are ready to step in as a leader, aren't afraid to be bold, and have a childlike personality. While you're sometimes naive and quick-tempered, your optimistic and enthusiatic nature draw those around you in.</p>";
      // play sound
      stopAllAudio();
      andObj.play();
      modal.hidden = !modal.hidden;
      break;

      case 'tau':
      zDisplayImgObj.src = "images/darrylphilbincircle.png";
      // title
      zTitleObj.innerHTML = "<h1>Darryl Philbin</h1>";
      // date range
      zDateRangeObj.innerHTML = "<h2>April 20th - May 20th</h2>";
      // description
      zMoreInfoObj.innerHTML = "<p>You're the person that holds everything down, just as Daryll does whether it's in the warehouse or in the office. You're patient when it comes to dealing with the people around you, and although sometimes you find yourself being stubborn, you stay persistent and act as a friend that people can rely on.</p>";
      // play sound
      stopAllAudio();
      darObj.play();
    modal.hidden = !modal.hidden;
    break;

     case 'gem':
      zDisplayImgObj.src = "images/kellykapoorcircle.png";
      // title
      zTitleObj.innerHTML = "<h1>Kelly Kapoor</h1>";
      // date range
      zDateRangeObj.innerHTML = "<h2>May 21st - June 20th</h2>";
      // description
      zMoreInfoObj.innerHTML = "<p>Your talkatative and curious nature sparks new connections, and just like Kelly you are all about socializing within your environment. While people mistake you for being two-faced, your personality is able to adapt and it's easy to express it.</p>";
      // play sound
      stopAllAudio();
      kelObj.play();
      modal.hidden = !modal.hidden;
      break;

      case 'can':
      zDisplayImgObj.src = "images/jimcircle.png";
      // title
      zTitleObj.innerHTML = "<h1>Jim Halpert</h1>";
      // date range
      zDateRangeObj.innerHTML = "<h2>June 21st - July 22nd</h2>";
      // description
      zMoreInfoObj.innerHTML = "<p>Just like Jim, you have it all. While you're sarcastic and witty on the outside, your're passionate and sentimental to the core. Someone like you can either be a best friend or worst enemy - according to Dwight. You will do whatever you can to make other's be the best they can be, even if it's unrealistic.</p>";
      // play sound
      stopAllAudio();
      jiObj.play();
      modal.hidden = !modal.hidden;
      break;

      case 'leo':
      zDisplayImgObj.src = "images/michaelscottcircle.png";
      // title
      zTitleObj.innerHTML = "<h1>Michael Scott</h1>";
      // date range
      zDateRangeObj.innerHTML = "<h2>July 23rd - August 22nd</h2>";
      // description
      zMoreInfoObj.innerHTML = "<p>It's Michael Scott's world, and everyone else is just living in it. You require a lot of attention and while you can be seen as controlling or dramatic, you are fearless and use your confidence and humor to light up those around you. You were born to rule through your ambitious nature.</p>";
      // play sound
      stopAllAudio();
      micObj.play();
      modal.hidden = !modal.hidden;
      break;

      case 'vir':
      zDisplayImgObj.src = "images/angelamartincircle.png";
      // title
      zTitleObj.innerHTML = "<h1Angela Martin</h1>";
      // date range
      zDateRangeObj.innerHTML = "<h2>August 23rd - September 22nd</h2>";
      // ddescription
      zMoreInfoObj.innerHTML = "<p>While Angela can be cold and over-critical, there is a different side to you that says otherwise. You are practical, diligent, sensible, and great helpers to those in need. While you're subtle in your actions, you notice and remember everything which gives you an advantage.</p>";
      // play sound
      stopAllAudio();
      angObj.play();
      modal.hidden = !modal.hidden;
      break;

      case 'lib':
      zDisplayImgObj.src = "images/phyllisvancecircle.png";
      // title
      zTitleObj.innerHTML = "<h1>Phyllis Vance</h1>";
      // date range
      zDateRangeObj.innerHTML = "<h2>September 23rd - October 22nd</h2>";
      // description
      zMoreInfoObj.innerHTML = "<p>Phyllis and you are the most balanced zodiac sign in the office. Sociable, easy-going, polite are just a few that words make up for who you are. Indecisiveness and gullibility can get in your way at times but you're laid-back nature draws people in which contributes to your likeableness.</p>";
      // play sound
      stopAllAudio();
      phyObj.play();
      modal.hidden = !modal.hidden;
      break;

      case 'sco':
      zDisplayImgObj.src = "images/dwightschrutecircle.png";
      // title
      zTitleObj.innerHTML = "<h1>Dwight Schrute</h1>";
      // display date range
      zDateRangeObj.innerHTML = "<h2>October 23rd - November 21st</h2>";
      // display description
      zMoreInfoObj.innerHTML = "<p>You are highly intelligent and have a very strong understanding of your inner self. Dwight is highly competitive and intense, and someone like you doesn't fall short from that. While your domineering nature may come off as aggressive, you're passionate about the things you care about - who could blame you!</p>";
      // play sound
      stopAllAudio();
      dwiObj.play();
      modal.hidden = !modal.hidden;
      break;

      case 'sag':
      zDisplayImgObj.src = "images/ryanhowardcircle.png";
      // title
      zTitleObj.innerHTML = "<h1>Ryan Howard</h1>";
      // date range
      zDateRangeObj.innerHTML = "<h2>November 22nd - December 21st</h2>";
      // description
      zMoreInfoObj.innerHTML = "<p>Who once first started as a temp, Ryan, like yourself, breaks barriers. You are fiery and charming but on your bad days you tend to show careless, hot-headed, and pushy tendencies. Otherwise, you draw people in with your extraverted and confident personality.</p>";
      // play sound
      stopAllAudio();
      ryaObj.play();
      modal.hidden = !modal.hidden;
      break;

      case 'cap':
      zDisplayImgObj.src = "images/stanleyhudsoncircle.png";
      // title
      zTitleObj.innerHTML = "<h1>Stanley Hudson</h1>";
      // date range
      zDateRangeObj.innerHTML = "<h2>December 22nd - January 19th</h2>";
      // description
      zMoreInfoObj.innerHTML = "<p>Stanley is a tough man to please, and like most of you, you're sometimes pessimistic and stubborn in situations. Make no mistake, you're practical and wise which makes others look up to you. Like Stanely, you're very passionate about your interests and are an independent individual.</p>";
      // play sound
      stopAllAudio();
      staObj.play();
      modal.hidden = !modal.hidden;
      break;

      case 'aqu':
      zDisplayImgObj.src = "images/oscarmartinezcircle.png";
      // title
      zTitleObj.innerHTML = "<h1>Oscar Martinez</h1>";
      // date range
      zDateRangeObj.innerHTML = "<h2>January 20th - February 18th</h2>";
      // description
      zMoreInfoObj.innerHTML = "<p>Oscar is on top of things - and just like him, you know your stuff. You have high standards - you're intellectual and independent nature makes you likeable and a leader. Sometimes people see you as contradictory and stubborn, but you're better at seeing through people through your observant ways.</p>";
      // play sound
      stopAllAudio();
      oscObj.play();
      modal.hidden = !modal.hidden;
      break;

      case 'pis':
      zDisplayImgObj.src = "images/pambeeslycircle.png";
      // title
      zTitleObj.innerHTML = "<h1>Pam Beesly</h1>";
      // date range
      zDateRangeObj.innerHTML = "<h2>February 19th - March 20th</h2>";
      // description
      zMoreInfoObj.innerHTML = " <p>You have a comforting presence to you and are considered to be a very creative person - just like Pam. You draw people in due to your compassionate, trusting, and generous nature. Everyone can count on you, and you know how to protect your vulnerability through humour and a cool exterior.</p>";
      // play sound
      stopAllAudio();
      paObj.play();
      modal.hidden = !modal.hidden;
      break;
  }
}


// Sounds 

const andObj = document.getElementById('sndAndy');
const darObj = document.getElementById('sndDarryl');
const kelObj = document.getElementById('sndKelly');
const jiObj = document.getElementById('sndJim');
const micObj = document.getElementById('sndMike');
const angObj = document.getElementById('sndAngela');
const phyObj = document.getElementById('sndPhyllis');
const dwiObj = document.getElementById('sndDwight');
const ryaObj = document.getElementById('sndRyan');
const staObj = document.getElementById('sndStanley');
const oscObj = document.getElementById('sndOscar');
const paObj = document.getElementById('sndPam');

function stopAllAudio() {
  // Stop ALL sounds for playing
  andObj.pause();
  andObj.currentTime = 0;
  //
  darObj.pause();
  darObj.currentTime = 0;
  //
  kelObj.pause();
  kelObj.currentTime = 0;

  jiObj.pause();
  jiObj.currentTime = 0;

  micObj.pause();
  micObj.currentTime = 0;

  angObj.pause();
  angObj.currentTime = 0;

  phyObj.pause();
  phyObj.currentTime = 0;

  dwiObj.pause();
  dwiObj.currentTime = 0;

  ryaObj.pause();
  ryaObj.currentTime = 0;

  staObj.pause();
  staObj.currentTime = 0;

  oscObj.pause();
  oscObj.currentTime = 0;

  paObj.pause();
  paObj.currentTime = 0;
}