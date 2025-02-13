let name = prompt("enter your name: ")
let age = number(prompt("enter your age: "))
let gender = prompt("enter your gender (g, b): ")
let salary = prompt("enter your salary: ")

if (age >= 18 && gender == "g" && salary >= 3000 || salary <= 5000) {
    console.log('თქვენი ფინანსური მგომარეობა უზრუნველყოფილია');
}