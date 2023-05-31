const mainText = document.querySelector(".bold1");
const introText = document.querySelector(".bold2");
const nameInput = document.querySelector("#fullname");

const wordsArray = ["Jona", "student", "mondriaan", "learning", "software"];
const wordsArray2 = ["name", "van", "de", 17, "old", "I'm ", "first", "mondriaan", "is", "of", "portfolio"];

let index = 0;
let index2 = 0;

function printText(){

    cardText = 
        `               
        01  < Hi! I'm $ > ^
        02  < I am currently a $ at ROC  $  > ^
        03  < I'm $ how to be a $ developer as we speak >
        `;

        for (let i = 0; i < cardText.length; i++) {
            const character = cardText[i];
           
            setTimeout(()=>{
                // console.log(character);
                if(character == "^"){
                    console.log(character);
                    mainText.innerHTML += "<br>";  
                }else if(character == "$"){
                    mainText.innerHTML += "<span>"+wordsArray[index]+"</span>";
                    index++;
                }else{
                    mainText.innerHTML += character; 
                }
            }, i*30 );
        }

}

printText();



function printText2(){

    cardText2 = 
        `               
        01  < My full $ is Jona $ $ Lindeloof > ^
        02  < I'm $ years $ > ^
        03  < $ now in my $ year at ROC $ > ^
        04  < This $ the start $ my $ >
        `;

        for (let i = 0; i < cardText2.length; i++) {
            const character = cardText2[i];
           
            setTimeout(()=>{
                // console.log(character);
                if(character == "^"){
                    console.log(character);
                    introText.innerHTML += "<br>";  
                }else if(character == "$"){
                    introText.innerHTML += "<b>"+wordsArray2[index2]+"</b>";
                    index2++;
                }else{
                    introText.innerHTML += character; 
                }
            }, i*30 );
        }

}

printText2();


