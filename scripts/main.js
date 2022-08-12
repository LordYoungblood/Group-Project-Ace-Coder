'use strict';
import { codeQuestionDict } from "./codeQuestionDict.js";
import { mathQuestionDict } from "./mathDict.js";
import { biologyQuestionDict } from "./biologyDict.js";

const checkCorrect = (button, rightAnswer, hint, multiplier) => {
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
    // mathBtn.hidden = true;
    // bioButton.hidden = true;
}

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
            .then(data => data.deck_id)
            .then(deck_ID => {
                hideButtons();
                if(button === bioButton){
                    document.body.style['background-image'] = 'url(../pictures/background.jpg)';
                    helpbtn.hidden = true;
                }
                if(button === mathBtn){
                    document.body.style['background-image'] = 'url(../pictures/background.jpg)';
                    helpbtn.hidden = true;
                }

                drawbtn.addEventListener('click', function () {
                    fetch(`http://deckofcardsapi.com/api/deck/${deck_ID}/draw/?count=1`)
                        .then(response => response.json())
                        .then(data => {
                            document.getElementById("game-questions").hidden = false;
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
// shufflebtn.addEventListener('click', function () {
//     fetch("http://deckofcardsapi.com/api/deck/new/shuffle/?cards=AS,2S,KS,AD,2D,KD,AC,2C,KC,AH,2H,KH")
//         .then(response => response.json())
//         .then(data => data.deck_id)
//         .then(deck_ID => {
//             hideButtons();
//             // drawbtn.hidden = false;
//             // helpbtn.hidden = false;
//             // shufflebtn.hidden = true;
//             // arraysButton.hidden = true;
//             // classesButton.hidden = true;
//             // functionsButton.hidden = true;
//             // hofButton.hidden = true;


//             drawbtn.addEventListener('click', function () {
//                 fetch(`http://deckofcardsapi.com/api/deck/${deck_ID}/draw/?count=1`)
//                     .then(response => response.json())
//                     .then(data => {
//                         document.getElementById("game-questions").hidden = false;
//                         let cardCode = data.cards[0].code;
//                         let imagelink = data.cards[0].image;

//                         cardimage.src = imagelink

//                         let question = codeQuestionDict[cardCode].question;

//                         questionBlock.innerHTML = question;
//                         aAnswer.innerHTML = codeQuestionDict[cardCode].answers.a;
//                         bAnswer.innerHTML = codeQuestionDict[cardCode].answers.b;
//                         cAnswer.innerHTML = codeQuestionDict[cardCode].answers.c;
//                         dAnswer.innerHTML = codeQuestionDict[cardCode].answers.d;

//                         var answeredCorrectly = false;
//                         aAnswer.addEventListener('click', function () {
//                             if (!answeredCorrectly) {
//                                 answeredCorrectly = checkCorrect(aAnswer, codeQuestionDict[cardCode].correctAnswer, codeQuestionDict[cardCode].hint, codeQuestionDict[cardCode].difficulty);
//                             }

//                         })
//                         bAnswer.addEventListener('click', function () {
//                             if (!answeredCorrectly) {
//                                 answeredCorrectly = checkCorrect(bAnswer, codeQuestionDict[cardCode].correctAnswer, codeQuestionDict[cardCode].hint, codeQuestionDict[cardCode].difficulty);
//                             }
//                         })
//                         cAnswer.addEventListener('click', function () {
//                             if (!answeredCorrectly) {
//                                 answeredCorrectly = checkCorrect(cAnswer, codeQuestionDict[cardCode].correctAnswer, codeQuestionDict[cardCode].hint, codeQuestionDict[cardCode].difficulty);
//                             }
//                         })
//                         dAnswer.addEventListener('click', function () {
//                             if (!answeredCorrectly) {
//                                 answeredCorrectly = checkCorrect(dAnswer, codeQuestionDict[cardCode].correctAnswer, codeQuestionDict[cardCode].hint, codeQuestionDict[cardCode].difficulty);
//                             }
//                         })
//                         helpbtn.addEventListener('click', function () {
//                             // window.open ("https://developer.mozilla.org/en-US/docs/Web/JavaScript", "_blank");
//                             let cardSuit = data.cards[0].suit;
//                             if (cardSuit === 'SPADES') {
//                                 window.open("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array", "_blank")
//                             }
//                             if (cardSuit === 'HEARTS') {
//                                 window.open("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions", "_blank")
//                             }
//                             if (cardSuit === 'DIAMONDS') {
//                                 window.open("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function", "_blank")
//                             }
//                             if (cardSuit === 'CLUBS') {
//                                 window.open("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes", "_blank")
//                             }

//                         })
//                     });
//             })
//         })
// })





// functionsButton.addEventListener('click', function () {
//     fetch("http://deckofcardsapi.com/api/deck/new/shuffle/?cards=AD,2D,KD")
//         .then(response => response.json())
//         .then(data => data.deck_id)
//         .then(deck_ID => {
//             document.getElementById("game-questions").hidden = false;
//             hideButtons();
//             // drawbtn.hidden = false;
//             // shufflebtn.hidden = true;
//             // functionsButton.hidden = true;
//             drawbtn.addEventListener('click', function () {
//                 fetch(`http://deckofcardsapi.com/api/deck/${deck_ID}/draw/?count=1`)
//                     .then(response => response.json())
//                     .then(data => {
//                         let cardCode = data.cards[0].code;
//                         let imagelink = data.cards[0].image;

//                         cardimage.src = imagelink

//                         let question = questionDict[cardCode].question;

//                         questionBlock.innerHTML = question;
//                         aAnswer.innerHTML = questionDict[cardCode].answers.a;
//                         bAnswer.innerHTML = questionDict[cardCode].answers.b;
//                         cAnswer.innerHTML = questionDict[cardCode].answers.c;
//                         dAnswer.innerHTML = questionDict[cardCode].answers.d;

//                         var answeredCorrectly = false;
//                         aAnswer.addEventListener('click', function () {
//                             if (!answeredCorrectly) {
//                                 answeredCorrectly = checkCorrect(aAnswer, questionDict[cardCode].correctAnswer, questionDict[cardCode].hint, questionDict[cardCode].difficulty);
//                             }

//                         })
//                         bAnswer.addEventListener('click', function () {
//                             if (!answeredCorrectly) {
//                                 answeredCorrectly = checkCorrect(bAnswer, questionDict[cardCode].correctAnswer, questionDict[cardCode].hint, questionDict[cardCode].difficulty);
//                             }
//                         })
//                         cAnswer.addEventListener('click', function () {
//                             if (!answeredCorrectly) {
//                                 answeredCorrectly = checkCorrect(cAnswer, questionDict[cardCode].correctAnswer, questionDict[cardCode].hint, questionDict[cardCode].difficulty);
//                             }
//                         })
//                         dAnswer.addEventListener('click', function () {
//                             if (!answeredCorrectly) {
//                                 answeredCorrectly = checkCorrect(dAnswer, questionDict[cardCode].correctAnswer, questionDict[cardCode].hint, questionDict[cardCode].difficulty);
//                             }
//                         })
//                         helpbtn.addEventListener('click', function () {
//                             // window.open ("https://developer.mozilla.org/en-US/docs/Web/JavaScript", "_blank");
//                             let cardSuit = data.cards[0].suit;
//                             if (cardSuit === 'SPADES') {
//                                 window.open("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array", "_blank")
//                             }
//                             if (cardSuit === 'HEARTS') {
//                                 window.open("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions", "_blank")
//                             }
//                             if (cardSuit === 'DIAMONDS') {
//                                 window.open("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function", "_blank")
//                             }
//                             if (cardSuit === 'CLUBS') {
//                                 window.open("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes", "_blank")
//                             }

//                         })
//                     });
//             })
//         })
// })

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


// let questionDict = {
//     "AS": {
//         "question": `Given the following array, what is the correct method of returning an array containing only values 'jeans' and 'sweatpants'?\n <pre><code>const pants = ['jeans', 'sweatpants', 'leggings', 'shorts', 'slacks']</code></pre>`,
//         "answers": {
//             a: "const newPants = pants.map(1,2)",
//             b: "const newPants = pants.slice(0,1)",
//             c: "const newPants = pants.slice(0,2)",
//             d: "const newPants = pants.reduce(1)"
//         },
//         "correctAnswer": "c",
//         "hint": "Think about how each array method behaves, and the parameter needed to be passed in to each method",
//         "difficulty": 12
//     },
//     "2S": {
//         "question": "How do you create an empty array?",
//         "answers": {
//             a: "let array = [];",
//             b: "var arr = array;",
//             c: "const array;",
//             d: "console.log(empty array);"
//         },
//         "correctAnswer": "a",
//         "hint": "What does an array look like?",
//         "difficulty": 2
//     },
//     "KS": {
//         "question": `Given this code, which is the proper method to have one array containing all elements from both arrays? \n <pre><code>const Fruits = ['Banana', 'Strawberry', 'Apple', 'Oranges'] \n const Vegetables ['Tomato','Corn', 'Bell Pepper', 'Carrot']<code><pre>`,
//         "answers": {
//             a: ".map",
//             b: ".concat",
//             c: ".reduce",
//             d: ".slice"
//         },
//         "correctAnswer": "b",
//         "hint": "Think about how each method handles the array, and what the return of each method looks like",
//         "difficulty": 11
//     },
//     "AD": {
//         "question": "What is the equivalent Async syntax for the following Promise statement:\n<pre><code>  function myFunction() {\n  return Promise.resolve("Hello");\n}",
//         "answers": {
//             a: `<pre><code>async function myFunction() {\n return "Hello";\n</code></pre>}`,
//             b: `<pre><code>function async myFunction() {\n return "Hello";\n</code></pre>}`,
//             c: `<pre><code>async function myFunction().then( {\n return "Hello";\n);</code></pre>}`,
//             d: `<pre><code>function async myFunction().then ( {\n return "Hello";\n);</code></pre>}`
//         },
//         "correctAnswer": "a",
//         "hint": "Remember, functions are executed in the order called - not in the order defined.",
//         "difficulty": 12
//     },
//     "2D": {
//         "question": `Given the following code, what is the expected output from myDisplayer()?<pre><code>function myFirst() {\n  myDisplayer("Hello");\n}\nfunction mySecond() {\n
//       myDisplayer("Goodbye");\n}\n\nmySecond();\nmyFirst();`,
//         "answers": {
//             a: "Goodbye",
//             b: "Hello",
//             c: "",
//             d: "undefined"
//         },
//         "correctAnswer": "b",
//         "hint": "Remember, functions are executed in the order called - not in the order defined.",
//         "difficulty": 2
//     },
//     "KD": {
//         "question": `Given the following code, what would be a more efficient way to provide input #'s and display the result?'<pre><code>function myDisplayer(some) {\n  document.getElementById("demo").innerHTML = some;\n}\nfunction myCalculator(num1, num2) {\n  let sum = num1 + num2;\n  return sum;\n}\nlet result = myCalculator(5, 5);\nmyDisplayer(result);</code></pre>`,
//         "answers": {
//             a: "Adding a function call in the first line of myCalculator(), myDisplayer(result)",
//             b: "Adding a function call in the first line of myCalculator(), myDisplayer(result)",
//             c: "Adding a function call in the last line of myCalculator(), myDisplayer(sum)",
//             d: "Nothing, it's perfect the way it is!"
//         },
//         "correctAnswer": "c",
//         "hint": "Remember, calling functions within functions can eliminate some complexity in your code.",
//         "difficulty": 11
//     },
//     "AC": {
//         "question": "What is the indicator to allow use of parent methods within a child class?",
//         "answers": {
//             a: "super",
//             b: "subclass",
//             c: "get",
//             d: "extends"
//         },
//         "correctAnswer": "a",
//         "hint": "think about how inheritance is used to define a child class from a parent class",
//         "difficulty": 12
//     },
//     "2C": {
//         "question": "What is the proper syntax to define a new class?",
//         "answers": {
//             a: `class = ClassName { \n constructor() {...} \n }`,
//             b: `class ClassName { \n constructor() {...} \n }`,
//             c: `class ClassName = { \n constructor() {...} \n }`,
//             d: `class ClassName { \n constructor = () {...} \n }`
//         },
//         "correctAnswer": "b",
//         "hint": "look carefully at how a class is defined and what is necessary to define the class",
//         "difficulty": 2
//     },
//     "KC": {
//         "question": "If a class contains a private property, what are the two method types that will allow for those private properties to be accessed?",
//         "answers": {
//             a: "get, set",
//             b: "super, subclass",
//             c: "extends, super",
//             d: "get, extends"
//         },
//         "correctAnswer": "a",
//         "hint": "remember that private properties can only be accessed within a parent class",
//         "difficulty": 11
//     },
//     "AH": {
//         "question": "Which of the following higher order functions does not return a new array?",
//         "answers": {
//             a: ".map",
//             b: ".forEach",
//             c: ".reduce",
//             d: ".filter"
//         },
//         "correctAnswer": "b",
//         "hint": "what are the behaviors of each higher order function",
//         "difficulty": 12
//     },
//     "2H": {
//         "question": "What is the proper way to declare a function?",
//         "answers": {
//             a: "function name = name (){...}",
//             b: "function name {...}",
//             c: "function name() = {...}",
//             d: "function name () {...}"
//         },
//         "correctAnswer": "d",
//         "hint": "think about what elements constitute a function and how it is called",
//         "difficulty": 2
//     },
//     "KH": {
//         "question": `Given the following function, what do you expect to be logged to the console? \n <pre><code>function uppercase(string){ \n var array1 = str.split(' '); \n var newArray1 = []; \n\nfor(var x =0; x < newArray1.length; x++){ \n newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1)); \n} \n return newarray1.join(' '); \n} \n console.log(uppercase('the quick brown fox'))</code></pre>;`,
//         "answers": {
//             a: "The quick brown fox",
//             b: "THE QUICK BROWN FOX",
//             c: "The Quick Brown Fox",
//             d: "the quick brown fox"
//         },
//         "correctAnswer": "c",
//         "hint": "look at the element and index being called from the array, how do the .uppercase and .slice methods behave?",
//         "difficulty": 11
//     }

// };