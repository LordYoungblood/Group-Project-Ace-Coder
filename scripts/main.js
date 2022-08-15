'use strict';
import { codeQuestionDict } from "./codeQuestionDict.js";
import { mathQuestionDict } from "./mathDict.js";
import { biologyQuestionDict } from "./biologyDict.js";

export const checkCorrect = (button, rightAnswer, hint, multiplier) => {
    console.log('but id: ', button.id)
    if (button.id === rightAnswer) {

        // button.style.backgroundColor = "green";
        button.innerHTML = 'Correct! Click Draw to Move to the Next Question!'
        totalScore += multiplier;
        console.log(totalScore)
        score.innerHTML = totalScore;

        let message = 'Well-Done!'
        document.querySelector("#alert-container").innerHTML = `
        <div class="alert alert-success" role="alert" data-dismiss="alert">
        <h4 class="alert-heading">${message}</h4>
      </div>`

        return true;
    } else {

        // button.style.backgroundColor = "red";
        totalScore--;
        score.innerHTML = totalScore;

        let messageWrong = 'Wrong!'
        document.querySelector("#alert-container").innerHTML = `
        <div class="alert alert-danger" role="alert" data-dismiss="alert">
        <h4 class="alert-heading">${messageWrong}</h4>
        </div>`
        button.innerHTML = hint;
    }
}

const hideButtons = () =>{
    drawbtn.hidden = false;
    helpbtn.hidden = false;
    shufflebtn.hidden = true;
    arraysButton.hidden = true;
    classesButton.hidden = true;
    functionsButton.hidden = true;
    hofButton.hidden = true;
    mathBtn.hidden = true;
    bioButton.hidden = true;
}

let cardCountdown = 0;
let totalScore = 0;
let score = document.getElementById('score-container');

let helpbtn = document.getElementById('help-button')
let shufflebtn = document.getElementById('shuffle-button')
let drawbtn = document.getElementById('draw-button')
let cardimage = document.getElementById('card-img')
let functionsButton = document.getElementById('functions-button');
let arraysButton = document.getElementById('arrays-button');
let classesButton = document.getElementById('classes-button');
let hofButton = document.getElementById('hof-button');

let mathBtn = document.getElementById('math-button');
let bioButton = document.getElementById('biology-button');

let currentQuestion = document.getElementById
    ('current-question')

let questionBlock = document.getElementById("question-block");
let aAnswer = document.getElementById('a');
let bAnswer = document.getElementById('b');
let cAnswer = document.getElementById('c');
let dAnswer = document.getElementById('d');

const buttonSetup = (button, fetchString, questionDict) => {
    button.addEventListener('click', function () {
        fetch(`http://deckofcardsapi.com/api/deck/new/shuffle/?cards=${fetchString}`)
            .then(response => response.json())
            .then(data => {
                cardCountdown = data.remaining;
                console.log(cardCountdown);
                return data.deck_id;
            })
            .then(deck_ID => {
                hideButtons();
                if(button === bioButton){
                    document.body.style['background-image'] = 'url(../pictures/movingdna1.gif)';
                    helpbtn.hidden = true;
                }
                if(button === mathBtn){
                    document.body.style['background-image'] = 'url(../pictures/math1.webp)';
                    helpbtn.hidden = true;
                }

                drawbtn.addEventListener('click', function () {
                    fetch(`http://deckofcardsapi.com/api/deck/${deck_ID}/draw/?count=1`)
                        .then(response => response.json())
                        .then(data => {
                            document.getElementById("game-questions").hidden = false;

                            if(cardCountdown === 0){
                                let message = `Your score is ${totalScore}! Click home to play again!`
                                document.querySelector("#alert-container").innerHTML = `
                                <div class="alert alert-success" role="alert" data-dismiss="alert">
                                <h4 class="alert-heading">${message}</h4>
                              </div>`  
                            }
                            cardCountdown --;

                            let cardCode = data.cards[0].code;
                            let imagelink = data.cards[0].image;
    
                            cardimage.src = imagelink
    
                            let question = questionDict[cardCode].question;
    
                            questionBlock.innerHTML = question;
                            aAnswer.innerHTML = questionDict[cardCode].answers.a;
                            bAnswer.innerHTML = questionDict[cardCode].answers.b;
                            cAnswer.innerHTML = questionDict[cardCode].answers.c;
                            dAnswer.innerHTML = questionDict[cardCode].answers.d;
    
                            var answeredCorrectly = false;
                            aAnswer.addEventListener('click', function () {
                                if (!answeredCorrectly) {
                                    answeredCorrectly = checkCorrect(aAnswer, questionDict[cardCode].correctAnswer, questionDict[cardCode].hint, questionDict[cardCode].difficulty);
                                }
    
                            })
                            bAnswer.addEventListener('click', function () {
                                if (!answeredCorrectly) {
                                    answeredCorrectly = checkCorrect(bAnswer, questionDict[cardCode].correctAnswer, questionDict[cardCode].hint, questionDict[cardCode].difficulty);
                                }
                            })
                            cAnswer.addEventListener('click', function () {
                                if (!answeredCorrectly) {
                                    answeredCorrectly = checkCorrect(cAnswer, questionDict[cardCode].correctAnswer, questionDict[cardCode].hint, questionDict[cardCode].difficulty);
                                }
                            })
                            dAnswer.addEventListener('click', function () {
                                if (!answeredCorrectly) {
                                    answeredCorrectly = checkCorrect(dAnswer, questionDict[cardCode].correctAnswer, questionDict[cardCode].hint, questionDict[cardCode].difficulty);
                                }
                            })
                            helpbtn.addEventListener('click', function () {
            
                                let cardSuit = data.cards[0].suit;
                                if (cardSuit === 'SPADES') {
                                    window.open("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array", "_blank")
                                }
                                if (cardSuit === 'HEARTS') {
                                    window.open("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions", "_blank")
                                }
                                if (cardSuit === 'DIAMONDS') {
                                    window.open("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function", "_blank")
                                }
                                if (cardSuit === 'CLUBS') {
                                    window.open("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes", "_blank")
                                }
    
                            })
                        });
                })
            })
    })
}

buttonSetup(shufflebtn, 'AS,2S,KS,AD,2D,KD,AC,2C,KC,AH,2H,KH', codeQuestionDict);

buttonSetup(arraysButton, 'AS,2S,KS', codeQuestionDict);

buttonSetup(classesButton, 'AC,2C,KC', codeQuestionDict);

buttonSetup(functionsButton, 'AD,2D,KD', codeQuestionDict);

buttonSetup(hofButton, 'AH,2H,KH', codeQuestionDict);

buttonSetup(mathBtn, 'AS,2S,KS,AD,2D,KD,AC,2C,KC,AH,2H,KH', mathQuestionDict);

buttonSetup(bioButton, 'AS,2S,KS,AD,2D,KD,AC,2C,KC,AH,2H,KH', biologyQuestionDict);


mathBtn.addEventListener('click', function () {
    fetch("http://deckofcardsapi.com/api/deck/new/shuffle/?cards=AS,2S,KS,AD,2D,KD,AC,2C,KC,AH,2H,KH")
        .then(response => response.json())
        .then(data => data.deck_id)
        .then(deck_ID => {

            drawbtn.hidden = false;
            shufflebtn.hidden = true;
            mathBtn.hidden = true;
            drawbtn.addEventListener('click', function () {
                fetch(`http://deckofcardsapi.com/api/deck/${deck_ID}/draw/?count=1`)
                    .then(response => response.json())
                    .then(data => {
                        document.getElementById("game-questions").hidden = false;
                        let cardCode = data.cards[0].code;
                        let imagelink = data.cards[0].image;

                        cardimage.src = imagelink

                        let question = mathQuestionDict[cardCode].question;

                        questionBlock.innerHTML = question;
                        aAnswer.innerHTML = mathQuestionDict[cardCode].answers.a;
                        bAnswer.innerHTML = mathQuestionDict[cardCode].answers.b;
                        cAnswer.innerHTML = mathQuestionDict[cardCode].answers.c;
                        dAnswer.innerHTML = mathQuestionDict[cardCode].answers.d;

                        var answeredCorrectly = false;
                        aAnswer.addEventListener('click', function () {
                            if (!answeredCorrectly) {
                                answeredCorrectly = checkCorrect(aAnswer, mathQuestionDict[cardCode].correctAnswer, mathQuestionDict[cardCode].hint, mathQuestionDict[cardCode].difficulty);
                            }

                        })
                        bAnswer.addEventListener('click', function () {
                            if (!answeredCorrectly) {
                                answeredCorrectly = checkCorrect(bAnswer, mathQuestionDict[cardCode].correctAnswer, mathQuestionDict[cardCode].hint, mathQuestionDict[cardCode].difficulty);
                            }
                        })
                        cAnswer.addEventListener('click', function () {
                            if (!answeredCorrectly) {
                                answeredCorrectly = checkCorrect(cAnswer, mathQuestionDict[cardCode].correctAnswer, mathQuestionDict[cardCode].hint, mathQuestionDict[cardCode].difficulty);
                            }
                        })
                        dAnswer.addEventListener('click', function () {
                            if (!answeredCorrectly) {
                                answeredCorrectly = checkCorrect(dAnswer, mathQuestionDict[cardCode].correctAnswer, mathQuestionDict[cardCode].hint, mathQuestionDict[cardCode].difficulty);
                            }
                        })
                        helpbtn.addEventListener('click', function () {
                            // window.open ("https://developer.mozilla.org/en-US/docs/Web/JavaScript", "_blank");
                            let cardSuit = data.cards[0].suit;
                            if (cardSuit === 'SPADES') {
                                window.open("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array", "_blank")
                            }
                            if (cardSuit === 'HEARTS') {
                                window.open("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions", "_blank")
                            }
                            if (cardSuit === 'DIAMONDS') {
                                window.open("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function", "_blank")
                            }
                            if (cardSuit === 'CLUBS') {
                                window.open("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes", "_blank")
                            }

                        })
                    });
            })
        })
})


