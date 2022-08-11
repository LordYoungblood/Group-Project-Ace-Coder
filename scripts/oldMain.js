'use strict';

let shufflebtn = document.getElementById('shuffle-button')
let drawbtn = document.getElementById('draw-button')
let cardimage = document.getElementById('card-img')
let currentQuestion = document.getElementById
('current-question')

let questionDict = {
    "AS" : {
        "question": "what is the value of this Array. let array = [1]",
        "answers": {
            a: "3",
            b: "4",
            c: "1",
            d: "1337"
         }//,
    //     "correctAnswer" : "c"
      },
    "2S" : {
        "question" : "Test question",
        "answers" : {
            a: "test1",
            b: "test2",
            c: "test2",
            d: "test3"
        }

    },
};

// let exampleDict ={
//     "2S": "Hey, here's a question"
// }

shufflebtn.addEventListener('click', function() {
    fetch("http://deckofcardsapi.com/api/deck/new/shuffle/?cards=AS,2S,") //KS,AD,2D,KD,AC,2C,KC,AH,2H,KH")
    .then(response => response.json())
    .then(data => data.deck_id)
    .then(deck_ID => {
        drawbtn.addEventListener('click', function(){
            fetch(`http://deckofcardsapi.com/api/deck/${deck_ID}/draw/?count=1`)
            .then(response => response.json())
            .then(data => {
                console.log(data.cards[0].code)
                console.log(data.cards[0].image)
                
                let cardCode = data.cards[0].code
                
                let imagelink = data.cards[0].image
                cardimage.src = imagelink

                let question = questionDict[cardCode].question;
                let answers = [];
               let output = []
               let questionAndAnswer = question + "\n" + answers
               for(let letter in questionDict[cardCode].answers){

                // ...add an HTML radio button
                answers.push(
                  `<label>
                    <input type="radio" value="${letter}">
                    ${letter} :
                    ${questionDict[cardCode].answers[letter]}
                  </label>`
                )};

                currentQuestion.innerHTML = answers

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