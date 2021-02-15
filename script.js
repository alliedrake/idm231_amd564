function fade2Content() {
console.log('fade2Content called');
document.body.classList.remove("blackScreen");
}

function myBirthday() {}

const andyObj = document.getElementById('andy');
const angelaObj = document.getElementById('angela');
const dwightObj = document.getElementById('dwight');
const jimObj = document.getElementById('jim');
const mikeObj = document.getElementById('mike');
const oscarObj = document.getElementById('oscar');
const pamObj = document.getElementById('pam');
const phyllisObj = document.getElementById('phyllis');
const ryanObj = document.getElementById('ryan');
const darrylObj = document.getElementById('darryl');
const kellyObj = document.getElementById('kelly');
const stanleyObj = document.getElementById('stanley');


andyObj.addEventListener('click', function (evt) {
    console.log('andy button clicked');  /* + evt.target.id */
    const idName = evt.target.id;
    userPicked(idName);
});

angelaObj.addEventListener('click', function (evt) {
    console.log('angela button clicked');
    const idName = evt.target.id;
    userPicked(idName);
});

dwightObj.addEventListener('click', function (evt) {
    console.log('dwight button clicked');
    const idName = evt.target.id;
    userPicked(idName);
});

jimObj.addEventListener('click', function (evt) {
    console.log('jim button clicked');
    const idName = evt.target.id;
    userPicked(idName);
});

mikeObj.addEventListener('click', function (evt) {
    console.log('michael button clicked');
    const idName = evt.target.id;
    userPicked(idName);
});

oscarObj.addEventListener('click', function (evt) {
    console.log('oscar button clicked');
    const idName = evt.target.id;
    userPicked(idName);
});

pamObj.addEventListener('click', function (evt) {
    console.log('pam button clicked');
    const idName = evt.target.id;
    userPicked(idName);
});

phyllisObj.addEventListener('click', function (evt) {
    console.log('phyllis button clicked');
    const idName = evt.target.id;
    userPicked(idName);
});

ryanObj.addEventListener('click', function (evt) {
    console.log('ryan button clicked');
    const idName = evt.target.id;
    userPicked(idName);
});

darrylObj.addEventListener('click', function (evt) {
    console.log('darryl button clicked');
    const idName = evt.target.id;
    userPicked(idName);
});

kellyObj.addEventListener('click', function (evt) {
    console.log('kelly button clicked');
    const idName = evt.target.id;
    userPicked(idName);
});

stanleyObj.addEventListener('click', function (evt) {
    console.log('stanley button clicked');
    const idName = evt.target.id;
    userPicked(idName);
});



/* function userPicked(whichOne) { 
    switch (whichOne) {
        case 'andy':
            default:
    }

}

*/
