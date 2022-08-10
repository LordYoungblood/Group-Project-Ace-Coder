'use strict';

let shufflebtn = document.getElementById('btn1')
let drawbtn = document.getElementById('btn2')
let cardimage = document.getElementById('image1')
let carddict = {};

shufflebtn.addEventListener('click', function() {
    fetch("http://deckofcardsapi.com/api/deck/new/shuffle/?cards=AS,2S,KS,AD,2D,KD,AC,2C,KC,AH,2H,KH")
    .then(response => response.json())
    .then(data => console.log(data.deck_id))
})