import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
    let action = ['ate', 'peed', 'crushed', 'broke'];
    let what = ['my homework', 'my phone', 'the car'];
    let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
    let icon = ['&#x1F610;', '&#x1F614;', '&#x1F623;', '&#x1F628;', '&#x1F62B;', '&#x1F631;'];

    document.getElementById('excuse').innerHTML = `${who[Math.floor(Math.random() * (who.length - 1))]} ${action[Math.floor(Math.random() * (action.length - 1))]} ${what[Math.floor(Math.random() * (what.length - 1))]} ${when[Math.floor(Math.random() * (when.length - 1))]}`;
    document.getElementById('emoji').innerHTML = `${icon[Math.floor(Math.random() * (icon.length - 1))]}`;
};
