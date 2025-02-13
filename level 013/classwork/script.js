


let academy = {
    name: "GOA",
    course: "javascript",
    socialLink: "goaFacebaka.com",
    reviews: "strong"
}

let person1 = {
    name: "nerd",
    status: "child",
    review: "weak"
}

let person2 = {
    name: "pro",
    status: "parent",
    review: "standart"
}

let person3 = {
    name: "haker",
    status: "unknown",
    review: "strong"
}


let valueAcademy = Object.values(academy)
console.log(valueAcademy)



let keyAcademy = Object.keys(academy)
console.log(keyAcademy)



let combinedAcademyAndPerson1 = Object.assign(academy, person1)
console.log(combinedAcademyAndPerson1)



let frozenAcademy = Object.freeze(academy)

console.log(Object.isFrozen(academy))