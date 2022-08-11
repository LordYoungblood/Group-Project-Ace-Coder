let mathQuestionDict = {
    "AS": {
        "question": "What are the factors of the following equation? \n f(x) = 7x^2 -63",
        "answers": {
            a: "x= 3, -3",
            b: "x= 3/7 -3/7",
            c: "x= 3, undefined",
            d: "x= 7, 9"
        },
        "correctAnswer": "a",
        "hint": "Think about the distributive property and how this impacts factoring binomials",
        "difficulty": 12
    },
    "2S": {
        "question": "2(x+2) = 10, solve for x",
        "answers": {
            a: "x = 4",
            b: "x = 5",
            c: "x = 2",
            d: "x = 3"
        },
        "correctAnswer": "d",
        "hint": "Cons",
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
        "difficulty": 11
    },
    "AD": {
        "question": "What is the equivalent Async syntax for the following Promise statement:\n<pre><code>function myFunction() {\n  return Promise.resolve('Hello');\n}</code></pre>",
        "answers": {
            a: `<pre><code>async function myFunction() {\n return "Hello";\n}</code></pre>`,
            b: `<pre><code>function async myFunction() {\n return "Hello";\n}</code></pre>`,
            c: `<pre><code>async function myFunction().then( {\n return "Hello";\n);}</code></pre>`,
            d: `<pre><code>function async myFunction().then ( {\n return "Hello";\n);}</code></pre>`
        },
        "correctAnswer": "a",
        "hint": "Remember, functions are executed in the order called - not in the order defined.",
        "difficulty": 12
    },
    "2D": {
        "question": `Given the following code, what is the expected output from myDisplayer( )?<pre><code>function myFirst() {\nmyDisplayer("Hello");\n}\nfunction mySecond() {\nmyDisplayer("Goodbye");\n}\n\nmySecond();\nmyFirst();`,
        "answers": {
            a: "Goodbye",
            b: "Hello",
            c: "__________",
            d: "undefined"
        },
        "correctAnswer": "b",
        "hint": "Remember, functions are executed in the order called - not in the order defined.",
        "difficulty": 2
    },
    "KD": {
        "question": `Given the following code, what would be a more efficient way to provide input #'s and display the result?'<pre><code>function myDisplayer(some) {\n  document.getElementById("demo").innerHTML = some;\n}\nfunction myCalculator(num1, num2) {\n  let sum = num1 + num2;\n  return sum;\n}\nlet result = myCalculator(5, 5);\nmyDisplayer(result);</code></pre>`,
        "answers": {
            a: "Adding a function call in the first line of <pre><code>myCalculator(), myDisplayer(result)</code></pre>",
            b: "Adding a function call in the first line of <pre><code>myCalculator(), myDisplayer(result)</code></pre>",
            c: "Adding a function call in the last line of <pre><code>myCalculator(), myDisplayer(sum)</code></pre>",
            d: "Nothing, it's perfect the way it is!"
        },
        "correctAnswer": "c",
        "hint": "Remember, calling functions within functions can eliminate some complexity in your code.",
        "difficulty": 11
    },
    "AC": {
        "question": "What is the indicator to allow use of parent methods within a child class?",
        "answers": {
            a: "super",
            b: "subclass",
            c: "get",
            d: "extends"
        },
        "correctAnswer": "a",
        "hint": "think about how inheritance is used to define a child class from a parent class",
        "difficulty": 12
    },
    "2C": {
        "question": "What is the proper syntax to define a new class?",
        "answers": {
            a: "<pre><code>class = ClassName { \n constructor() {...} \n }</code></pre>",
            b: "<pre><code>class ClassName { \n constructor() {...} \n }</code></pre>",
            c: "<pre><code>class ClassName = { \n constructor() {...} \n }</code></pre>",
            d: "<pre><code>class ClassName { \n constructor = () {...} \n }</code></pre>"
        },
        "correctAnswer": "b",
        "hint": "look carefully at how a class is defined and what is necessary to define the class",
        "difficulty": 2
    },
    "KC": {
        "question": "If a class contains a private property, what are the two method types that will allow for those private properties to be accessed?",
        "answers": {
            a: "get, set",
            b: "super, subclass",
            c: "extends, super",
            d: "get, extends"
        },
        "correctAnswer": "a",
        "hint": "remember that private properties can only be accessed within a parent class",
        "difficulty": 11
    },
    "AH": {
        "question": "Which of the following higher order functions does not return a new array?",
        "answers": {
            a: ".map",
            b: ".forEach",
            c: ".reduce",
            d: ".filter"
        },
        "correctAnswer": "b",
        "hint": "what are the behaviors of each higher order function",
        "difficulty": 12
    },
    "2H": {
        "question": "What is the proper way to declare a function?",
        "answers": {
            a: "<pre><code>function name = name (){...}</code></pre>",
            b: "<pre><code>function name {...}</code></pre>",
            c: "<pre><code>function name() = {...}</code></pre>",
            d: "<pre><code>function name () {...}</code></pre>"
        },
        "correctAnswer": "d",
        "hint": "think about what elements constitute a function and how it is called",
        "difficulty": 2
    },
    "KH": {
        "question": "Given the following function, what do you expect to be logged to the console? \n<pre><code>function uppercase(string){ \n var array1 = str.split(' '); \n var newArray1 = []; \n\nfor(var x =0; x < newArray1.length; x++){ \n newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1)); \n} \n return newarray1.join(' '); \n} \n console.log(uppercase('the quick brown fox'));</code></pre>",
        "answers": {
            a: "The quick brown fox",
            b: "THE QUICK BROWN FOX",
            c: "The Quick Brown Fox",
            d: "the quick brown fox"
        },
        "correctAnswer": "c",
        "hint": "look at the element and index being called from the array, how do the .uppercase and .slice methods behave?",
        "difficulty": 11
    }

};
export {mathQuestionDict}