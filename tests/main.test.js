const {checkCorrect} = require('./main');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const dom = new JSDOM(`<!DOCTYPE html><div id = "alert-container"></div>`)
// document.querySelector("#alert-container").innerHTML = `
// <div class="alert alert-success" role="alert" data-dismiss="alert">
// <h4 class="alert-heading">${message}</h4>
// </div>`

// const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
// console.log(dom.window.document.querySelector("p").textContent); // "Hello world"


describe('checkCorrect', () => {
  test('should return true if the input is correct', () => {
    expect(checkCorrect('correct')).toBe(true);
  });
});