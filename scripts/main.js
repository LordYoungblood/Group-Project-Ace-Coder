'use strict';
const checkCorrect = (button, rightAnswer, hint, multiplier) => {
    console.log('but id: ', button.id)
    if (button.id === rightAnswer) {

        // button.style.backgroundColor = "green";
        button.innerHTML = 'Correct! Click Draw to Move to the Next Question!'
        totalScore += multiplier;
        console.log(totalScore)
        score.innerHTML = totalScore;
        $('.alert').alert();
        return true;
    } else {
        // console.log('worng');
        // button.style.backgroundColor = "red";
        button.innerHTML = hint;
        return false;
    }
}

let totalScore = 0;
let score = document.getElementById('score-container');

let helpbtn = document.getElementById('help-button')
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
        "question": "Given the following array, what is the correct method of returning an array containing only values 'jeans' and 'sweatpants'?\n <pre><code>const pants = ['jeans', 'sweatpants', 'leggings', 'shorts', 'slacks']</code></pre>",
        "answers": {
            a: "const newPants = pants.map(1,2)",
            b: "const newPants = pants.slice(0,1)",
            c: "const newPants = pants.slice(0,2)",
            d: "const newPants = pants.reduce(1)"
        },
        "correctAnswer": "c",
        "hint": "Think about how each array method behaves, and the parameter needed to be passed in to each method",
        "difficulty": 11
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
        "hint": "What does an array look like?",
        "difficulty": 2
    },
    "KS": {
        "question": "Given this code, which is the proper method to have one array containing all elements from both arrays? \n <pre><code>const Fruits = ['Banana', 'Strawberry', 'Apple', 'Oranges'] \n const Vegetables ['Tomato','Corn', 'Bell Pepper', 'Carrot']",
        "answers": {
            a: ".map",
            b: ".concat",
            c: ".reduce",
            d: ".slice"
        },
        "correctAnswer": "b",
        "hint": "Think about how each method handles the array, and what the return of each method looks like",
        "difficulty": 12
    },
        "AD":{
            "question": `What is the equivalent Async syntax for the following Promise statement:\n<pre><code>  function myFunction() {/n  return Promise.resolve("Hello");/n}`,
            "answers": {
                a: `<pre><code>async function myFunction() {\n return "Hello";\n</code></pre>}`,
                b: `<pre><code>function async myFunction() {\n return "Hello";\n</code></pre>}`,
                c: `<pre><code>async function myFunction().then( {\n return "Hello";\n);</code></pre>}`,
                d: `<pre><code>function async myFunction().then ( {\n return "Hello";\n);</code></pre>}`
            },
            "correctAnswer": "a",
            "hint": "Remember, functions are executed in the order called - not in the order defined."
        },
    //     "2D":{
    //         "question": "Given the following code, what is the expected output from myDisplayer()?<pre><code>function myFirst() {\n  myDisplayer("Hello");\n}\nfunction mySecond() {\n
    //   myDisplayer("Goodbye");\n}\n\nmySecond();\nmyFirst();",
    //         "answers": {
    //             a: "Goodbye",
    //             b: "Hello",
    //             c: "",
    //             d: "undefined"
    //         }
    //         "correctAnswer": "b",
    //         "hint": "Remember, functions are executed in the order called - not in the order defined."
    //     },
    //     "KD" : {
    //         "question": "Given the following code, what would be a more efficient way to provide input #'s and display the result?'<pre><code>function myDisplayer(some) {\n  document.getElementById("demo").innerHTML = some;\n}\nfunction myCalculator(num1, num2) {\n  let sum = num1 + num2;\n  return sum;\n}\nlet result = myCalculator(5, 5);\nmyDisplayer(result);</code></pre>",
    //         "answers": {
    //             a: "Adding a function call in the first line of myCalculator(), myDisplayer(result)",
    //             b:"Adding a function call in the first line of myCalculator(), myDisplayer(result)",
    //             c:"Adding a function call in the last line of myCalculator(), myDisplayer(sum)",
    //             d:"Nothing, it's perfect the way it is!"
    //         }
    //         "correctAnswer": "c",
    //         "hint": "Remember, calling functions within functions can eliminate some complexity in your code."
    //     },
    //     "AC" : {
    //         "question": "What is the indicator to allow use of parent methods within a child class?"
    //         "answers": {
    //             a: "super",
    //             b:"subclass",
    //             c:"get",
    //             d:"extends"
    //         }
    //         "correctAnswer": "a",
    //         "hint": "think about how inheritance is used to define a child class from a parent class"
    //     },
    //     "2C" : {
    //         "question": "What is the proper syntax to define a new class?",
    //         "answers": {
    //             a: "class = ClassName { \n constructor() {...} \n }",
    //             b:"class ClassName { \n constructor() {...} \n }",
    //             c:"class ClassName = { \n constructor() {...} \n }",
    //             d:"class ClassName { \n constructor = () {...} \n }"
    //         }
    //         "correctAnswer": "b",
    //         "hint": "look carefully at how a class is defined and what is necessary to define the class"
    //     },
    //     "KC" : {
    //         "question": "If a class contains a private property, what are the two method types that will allow for those private properties to be accessed?",
    //         "answers": {
    //             a: "get, set",
    //             b:"super, subclass",
    //             c:"extends, super",
    //             d:"get, extends"
    //         }
    //         "correctAnswer": "a",
    //         "hint": "remember that private properties can only be accessed within a parent class"
    //     },
    // "AH" : {
    //     "question" : "Which of the following higher order functions does not return a new array?"
    //     "answers" : {
    //         a: ".map",
    //         b: ".forEach",
    //         c: ".reduce",
    //         d: ".filter"
    //     }
    //     "correctAnswer" :"b",
    //     "hint": "what are the behaviors of each higher order function"
    // }
    // "2H" : {
    //     "question" : "What is the proper way to declare a function?"
    //     "answers" : {
    //         a: "function name = name (){...}",
    //         b: "function name {...}",
    //         c: "function name() = {...}",
    //         d: "function name () {...}"
    //     }
    //     "correctAnswer" :"d",
    //     "hint": "think about what elements constitute a function and how it is called"
    // }
    // "KH" : {
    //     "question" : Given the following function, what do you expect to be logged to the console? \n function uppercase(string){ \n var array1 = str.split(' '); \n var newArray1 = []; \n\nfor(var x =0; x < newArray1.length; x++){ \n newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1)); \n} \n return newarray1.join(' '); \n} \n console.log(uppercase("the quick brown fox"));"
    //     "answers" : {
    //         a: "The quick brown fox",
    //         b: "THE QUICK BROWN FOX",
    //         c: "The Quick Brown Fox",
    //         d: "the quick brown fox"
    //     }
    //     "correctAnswer" :"c",
    //     "hint": "look at the element and index being called from the array, how do the .uppercase and .slice methods behave?"
    // }

};

// let exampleDict ={
//     "2S": "Hey, here's a question"
// }

shufflebtn.addEventListener('click', function () {
    fetch("http://deckofcardsapi.com/api/deck/new/shuffle/?cards=AS,2S,") //KS,AD,2D,KD,AC,2C,KC,AH,2H,KH")
        .then(response => response.json())
        .then(data => data.deck_id)
        .then(deck_ID => {
            document.getElementById("game-questions").hidden = false;
            drawbtn.hidden = false;
            shufflebtn.hidden = true;
            drawbtn.addEventListener('click', function () {
                fetch(`http://deckofcardsapi.com/api/deck/${deck_ID}/draw/?count=1`)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data.cards[0].code);
                        // console.log(data.cards[0].image);
                        // console.log(data.cards[0].value);
                        // console.log('score muit:',scoreMultiplierDict[data.cards[0].value]);
                        let cardCode = data.cards[0].code;
                        let imagelink = data.cards[0].image;

                        // var scoreMultiplier = scoreMultiplierDict[data.cards[0].difficulty];
                        // console.log(scoreMultiplier)

                        cardimage.src = imagelink

                        let question = questionDict[cardCode].question;
                        // let scoreMultiplier = questionDict[cardCode].difficulty;
                        console.log('questionDict[cardCode].difficulty', questionDict[cardCode].difficulty)
                        console.log(question);
                        questionBlock.innerHTML = question;
                        aAnswer.innerHTML = questionDict[cardCode].answers.a;
                        bAnswer.innerHTML = questionDict[cardCode].answers.b;
                        cAnswer.innerHTML = questionDict[cardCode].answers.c;
                        dAnswer.innerHTML = questionDict[cardCode].answers.d;
                        // console.log(questionDict[cardCode].correctAnswer);
                        console.log('answerid a:', aAnswer.id);
                        console.log('answerid b:', bAnswer.id);
                        var answeredCorrectly = false;
                        aAnswer.addEventListener('click', function () {
                            if (!answeredCorrectly) {
                                answeredCorrectly = checkCorrect(aAnswer, questionDict[cardCode].correctAnswer, questionDict[cardCode].hint, questionDict[cardCode].difficulty);
                            }
                            console.log(answeredCorrectly);

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

helpbtn.addEventListener('click',function(){
    window.location = "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
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
