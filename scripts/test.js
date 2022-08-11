'use strict';
const checkCorrect = (button, rightAnswer, hint) => {
    if (button.id === rightAnswer) {

        button.style.backgroundColor = "green";
        button.innerHTML = 'Correct! Click Draw to Move to the Next Question!'
        totalScore += 100;
        console.log(totalScore)
        score.innerHTML = totalScore;

        return true;
    } else {
        console.log('worng');
        button.style.backgroundColor = "red";
        button.innerHTML = hint;
        return false;
    }
}

let totalScore = 0;
let score = document.getElementById('score');

let shufflebtn = document.getElementById('shuffle-button')
let drawbtn = document.getElementById('draw-button')
let cardimage = document.getElementById('card-img')
let currentQuestion = document.getElementById
    ('current-question')

let questionBlock = document.getElementById("question-block");
let aAnswer = document.getElementById('a');
let bAnswer = document.getElementById('b');
let cAnswer = document.getElementById('c');
let dAnswer = document.getElementById('d');

let questionDict = {
    "AS": {
        "question": "what is the value of this Array. let array = [1]",
        "answers": {
            a: "3",
            b: "4",
            c: "1",
            d: "1337"
        },
        "correctAnswer": "c",
        "hint": "Check out the value within the array.",
        // 'difficulty': 10
    },
    "2S": {
        "question": "How do you create an empty array?",
        "answers": {
            a: "let array = [];",
            b: "var arr = array;",
            c: "const array;",
            d: "console.log(empty array);"
        },
        "correctAnswer": "a",
        "hint": "What does an array look like?"

    }
};

// let exampleDict ={
//     "2S": "Hey, here's a question"
// }

shufflebtn.addEventListener('click', function () {
    fetch("http://deckofcardsapi.com/api/deck/new/shuffle/?cards=AS,2S,") //KS,AD,2D,KD,AC,2C,KC,AH,2H,KH")
        .then(response => response.json())
        .then(data => data.deck_id)
        .then(deck_ID => {
            drawbtn.addEventListener('click', function () {
                fetch(`http://deckofcardsapi.com/api/deck/${deck_ID}/draw/?count=1`)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data.cards[0].code)
                        console.log(data.cards[0].image)

                        let cardCode = data.cards[0].code

                        let imagelink = data.cards[0].image
                        cardimage.src = imagelink

                        let question = questionDict[cardCode].question;

                        console.log(question);
                        questionBlock.innerHTML = question;
                        aAnswer.innerHTML = questionDict[cardCode].answers.a;
                        bAnswer.innerHTML = questionDict[cardCode].answers.b;
                        cAnswer.innerHTML = questionDict[cardCode].answers.c;
                        dAnswer.innerHTML = questionDict[cardCode].answers.d;
                        console.log(questionDict[cardCode].correctAnswer);
                        console.log('answerid:', aAnswer.id);
                        var answeredCorrectly = false;
                        aAnswer.addEventListener('click', function () {
                            if (!answeredCorrectly) {
                                answeredCorrectly = checkCorrect(aAnswer, questionDict[cardCode].correctAnswer, questionDict[cardCode].hint);
                            }
                            console.log(answeredCorrectly);

                            // if(questionDict[cardCode].correctAnswer === 'a'){
                            //     console.log('yes')
                            //     aAnswer.style.backgroundColor = "green";
                            //     aAnswer.innerHTML='Correct! Click Draw to Move to the Next Question!'
                            //     totalScore += 100;
                            //     console.log(totalScore)

                            // }
                            // else{
                            //     console.log('worng');
                            //     aAnswer.style.backgroundColor = "red";
                            //     aAnswer.innerHTML= questionDict[cardCode].hint;
                            // }
                        })
                        bAnswer.addEventListener('click', function () {
                            if (!answeredCorrectly) {
                                answeredCorrectly = checkCorrect(bAnswer, questionDict[cardCode].correctAnswer, questionDict[cardCode].hint);
                            }
                        })
                        cAnswer.addEventListener('click', function () {
                            if (!answeredCorrectly) {
                                answeredCorrectly = checkCorrect(cAnswer, questionDict[cardCode].correctAnswer, questionDict[cardCode].hint);
                            }
                        })
                        dAnswer.addEventListener('click', function () {
                            if (!answeredCorrectly) {
                                answeredCorrectly = checkCorrect(dAnswer, questionDict[cardCode].correctAnswer, questionDict[cardCode].hint);
                            }
                        })
                        //     let answers = [];
                        //    let output = []
                        //    for(let letter in questionDict[cardCode].answers){

                        //     // ...add an HTML radio button
                        //     answers.push(
                        //       `<label>
                        //         <input type="radio" value="${letter}">
                        //         ${letter} :
                        //         ${questionDict[cardCode].answers[letter]}
                        //       </label>`
                        //     )};

                        //     output.push(
                        //         `<div class="question"> ${currentQuestion.question} </div>
                        //         <div class="answers"> ${answers.join('')} </div>`
                        //       );

                        // currentQuestion.innerHTML = answers


                    });
            })
        })
})


// var myQuestions = [
//     "AH": {
//       question: "What is 10/2?",
//       code: "AH",
//       answers: {
//         a: '3',
//         b: '5',
//         c: '115'
//       },
//       correctAnswer: 'b'
//     },
//     {
//       question: "What is 30/3?",
//       code: "AS",
//       answers: {
//         a: '3',
//         b: '5',
//         c: '10'
//       },
//       correctAnswer: 'c'
//     }
//   ];

// "what is the value of this Array. let array = [1]"
// A: 1
// B: 2
// C: 3
// D: 4
