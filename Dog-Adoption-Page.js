dogYears();

let dog1Fave = ["bone","stick","rubber duck"];
let dog2Fave = ["frisbee","ball","stuffed toy"];
let dog3Fave = ["tennis ball","rope","rubber duck"];

document.getElementById("favetoys1").innerHTML = dog1Fave;
document.getElementById("favetoys2").innerHTML = dog2Fave;
document.getElementById("favetoys3").innerHTML = dog3Fave;

function dogYears(){
    let age = document.getElementsByClassName("age");
    for(let i = 0; i < age.length; i++){
        console.log(age[i].innerHTML);
        let addHumanYears = (age[i].innerHTML - 2) * 4;
        let dogYears = 2 * 10.5 + addHumanYears;

        if (age[i].innerHTML <= 2){ 
            age[i].innerHTML = age[i].innerHTML * 10.5;
        }
        else{
            age[i].innerHTML = dogYears;
        }
    }
}