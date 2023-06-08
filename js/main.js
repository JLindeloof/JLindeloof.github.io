const mainText = document.querySelector(".bold1");
const introText = document.querySelector(".bold2");
introText.parentElement.parentElement.style.display = "None";
const nameInput = document.querySelector("#fullname");
const searchInput = document.querySelector(".helloJJ");

const alertA = document.querySelector(".sumbitJJ");
alertA.addEventListener("click", ()=>{
    if (searchInput.value.includes("jayden") || searchInput.value.includes("Jayden")) {
        alert('Jayden is kast!');
    }else if(searchInput.value.includes("Partyk") || searchInput.value.includes("patryk")){
        alert("Patryk is een poolse dief!");
    }else if(searchInput.value.includes("Thijs") || searchInput.value.includes("thijs")){
        alert("Thijselotje is een progamer!");
    }else if(searchInput.value.includes("Zidane") || searchInput.value.includes("zidane")){
        alert("Zidane is turk!");
    }
});

const wordsArray = ["Jona", "student", "mondriaan", "learning", "software"];
const wordsArray2 = ["name", "van", "de", 17, "old", "I'm ", "first", "mondriaan", "is", "of", "portfolio"];

let index = 0;
let index2 = 0;


// function rotate(element){
//     const view = document.querySelector(".text2");
//     let rotateNumber = 0;
//     let left = false;
//     setInterval(function (){
//         // if(rotateNumber < 45){
//         //     rotateNumber++;
//         // }else if(rotateNumber > -45){
//         //     rotateNumber--;
//         // }
//         if (left == false) {
//             rotateNumber++;
//         }else if(left == true){
//             rotateNumber--;
//         }

//         if (rotateNumber == 10 || rotateNumber == -10) {
//             left = !left;
//             console.log(left);
//         }
//         view.style.transform = `rotate(${rotateNumber}deg)`;
//     }, 40)
// }

// rotate();



    



function printText() {

    cardText =
        `               
        01  < Hi! I'm $ > ^
        02  < I am currently a $ at ROC  $  > ^
        03  < I'm $ how to be a $ developer as we speak >
        `;

    for (let i = 0; i < cardText.length; i++) {
        const character = cardText[i];

        setTimeout(() => {
            // console.log(character);
            if (character == "^") {
                console.log(character);
                mainText.innerHTML += "<br>";
            } else if (character == "$") {
                mainText.innerHTML += "<span>" + wordsArray[index] + "</span>";
                index++;
            } else {
                mainText.innerHTML += character;
            }
        }, i * 30);
    }

}

printText();

setTimeout(printText2, cardText.length * 30 + 1000);

function printText2() {
    introText.parentElement.parentElement.style.display = "block";
    cardText2 =
        `               
        01  < My full $ is Jona $ $ Lindeloof > ^
        02  < I'm $ years $ > ^
        03  < $ now in my $ year at ROC $ > ^
        04  < This $ the start $ my $ >
        `;

    for (let i = 0; i < cardText2.length; i++) {
        const character = cardText2[i];

        setTimeout(() => {
            // console.log(character);
            if (character == "^") {
                console.log(character);
                introText.innerHTML += "<br>";
            } else if (character == "$") {
                introText.innerHTML += "<b>" + wordsArray2[index2] + "</b>";
                index2++;
            } else {
                introText.innerHTML += character;
            }
        }, i * 30);
    }

}

// printText2();


