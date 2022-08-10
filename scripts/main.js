'use strict';

let shufflebtn = document.getElementById('btn1')
let drawbtn = document.getElementById('btn2')
let cardimage = document.getElementById('image1')
let carddict = {};

shufflebtn.addEventListener('click', function() {
    fetch("http://deckofcardsapi.com/api/deck/new/shuffle/?cards=AS,2S,KS,AD,2D,KD,AC,2C,KC,AH,2H,KH")
    .then(response => response.json())
    .then(data => data.deck_id)
    .then(deck_ID => {
        drawbtn.addEventListener('click', function(){
            fetch(`http://deckofcardsapi.com/api/deck/${deck_ID}/draw/?count=1`)
            .then(response => response.json())
            .then(data => {
                console.log(data.cards[0].code)
                console.log(data.cards[0].image)
                let imagelink = data.cards[0].images.svg
                cardimage.src = imagelink
                // " image1" src = ""
            });
        })
    })
})

