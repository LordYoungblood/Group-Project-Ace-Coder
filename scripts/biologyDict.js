let biologyQuestionDict = {
    "AS": {
        "question": "How many bits of information does a nucleotide contain?",
        "answers": {
            a: "4",
            b: "2",
            c: "8",
            d: "1"
        },
        "correctAnswer": "b",
        "hint": "How many different nucleotides are there?",
        "difficulty": 12
    },
    "2S": {
        "question": "What is the powerhouse of the cell?",
        "answers": {
            a: "Mitochondria",
            b: "Ribosome",
            c: "Cytoplasm",
            d: "RNA"
        },
        "correctAnswer": "a",
        "hint": "Which organelle generates ATP?",
        "difficulty": 2
    },
    "KS": {
        "question": "From what animal/organ did the discovery of CasRx originate?",
        "answers": {
            a: "the hearts of cows in Wisconsin, USA",
            b: "the guts of sheep in New Zealand",
            c: "the livers of a rare fox species in Nanjing, China",
            d: "the brains of butterflies living on Camp Bullis (San Antonio, TX)"
        },
        "correctAnswer": "b",
        "hint": "Check out some YouTube lectures by Dr. Patrick Hsu!",
        "difficulty": 11
    },
    "AD": {
        "question": "What is the state-of-the-art ML model for predicting protein folding?",
        "answers": {
            a: `AlphaFold2`,
            b: `ProteinFold`,
            c: `AminoAcidFolds`,
            d: `FoldingAA`
        },
        "correctAnswer": "a",
        "hint": "What has Google been up to in the past few years?",
        "difficulty": 12
    },
    "2D": {
        "question": `What does CASP stand for?`,
        "answers": {
            a: "Continous Assesment of the Structure of Proteins",
            b: "Constant Analysis of the Structure of Proteins",
            c: "Critical Assessment of Protein Structure Prediction",
            d: "Continental US Society of Protein Structures"
        },
        "correctAnswer": "c",
        "hint": "Try googling the CASP competition!",
        "difficulty": 2
    },
    "KD": {
        "question": "What is a hammerhead ribozyme?",
        "answers": {
            a: "An enzyme that can generate enzymes of a particular shape that play a large part in carbohydrate metabolism",
            b: "A type of hammerhead shark",
            c: "A type of ribosome that can convert adipose tissue to muscular tissue via cellular respiration",
            d: "A ribozyme that can cleave itself, which plays a part in creating genetic logic gates"
        },
        "correctAnswer": "d",
        "hint": "What may the hammerhead shape of this molecule allow it to do?",
        "difficulty": 11
    },
    "AC": {
        "question": "Which US university has the BEST computational biologists in the world? #gobears",
        "answers": {
            a: "Harvard",
            b: "Stanford",
            c: "Penn State",
            d: "UC-Berkeley"
        },
        "correctAnswer": "d",
        "hint": "Check out Dr. Chris Anderson, Dr. Liana Lareau, Dr. Ian Holmes, and Dr. Adam Arkin!",
        "difficulty": 12
    },
    "2C": {
        "question": "What are the universal logic gates?",
        "answers": {
            a: "NAND and NOR",
            b: "AND and THEN",
            c: "OR and IF",
            d: "IF and THEN"
        },
        "correctAnswer": "a",
        "hint": "What logic can be used to construct any outcome?",
        "difficulty": 2
    },
    "KC": {
        "question": "Most life forms are carbon based! But we have recently discovered _________-based life froms as well!",
        "answers": {
            a: "Berkelium",
            b: "Helium",
            c: "Hydrogen",
            d: "Sulfur"
        },
        "correctAnswer": "d",
        "hint": "The deep sea is a weird place!",
        "difficulty": 11
    },
 
    "AH": {
        "question": "Where was the element with atomic number 97 discovered?",
        "answers": {
            a: "Detroit, MI",
            b: "Berkeley, CA",
            c: "San Antonio, TX",
            d: "Houston, TX"
        },
        "correctAnswer": "b",
        "hint": "Look at the name of element 97!",
        "difficulty": 12
    },
    "2H": {
        "question": "",
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
        "question": "Given the following function, what do you expect to be logged to the console? \nfunction uppercase(string){ \n var array1 = str.split(' '); \n var newArray1 = []; \n\nfor(var x =0; x < newArray1.length; x++){ \n newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1)); \n} \n return newarray1.join(' '); \n} \n console.log(uppercase('the quick brown fox'));",
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
export {biologyQuestionDict}