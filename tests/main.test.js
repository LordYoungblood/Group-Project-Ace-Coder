// const {checkCorrect} = require('../scripts/main');
import { checkCorrect } from "../scripts/main.js";
const jsdom = require("jsdom");
// const { JSDOM } = jsdom;

const dom = new JSDOM(
  `<!DOCTYPE html>
  <div id = "alert-container">
  </div>
  <button id = "a"></button>`);
// document.querySelector("#alert-container").innerHTML = `
// <div class="alert alert-success" role="alert" data-dismiss="alert">
// <h4 class="alert-heading">${message}</h4>
// </div>`

// const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
// console.log(dom.window.document.querySelector("p").textContent); // "Hello world"
const testButton = {
  id: "a"
};

describe('checkCorrect', () => {
  test('should return true if the input is correct', () => {
    expect(checkCorrect(testButton, "a", "testHint", 1)).toBe(true);
  });
});