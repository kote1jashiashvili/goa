


let CarObject = {
    brand: "toyota",
    model: "2 person car",
    year: "1669",
    color: "black",
    weight: "585kg"

}


console.log("this car's brand is " + CarObject.brand + ", this car's model is for " + CarObject.model + ", this car was made in " + CarObject.year + ", this car's color is " + CarObject.color + ", this car weights " + CarObject.weight + ".");


console.log(CarObject.brand)
console.log(CarObject.model)
console.log(CarObject.year)
console.log(CarObject.color)
console.log(CarObject.weight)

CarObject.brand = "lamborghini"
CarObject.model = "4 person car"
CarObject.year = "2019"
CarObject.color = "purple"
CarObject.weight = "675kg"

Carobject.mode = "speedy mode"

delete CarObject.mode



if (CarObject.brand == "toyota") {
    console.log("იგივე მანქანის ბრენდი გვყოლია ძმობილო")
} else {
    console.log(" სხვადასხვა მანქანის ბრენდია, ჩემი მოუგებს")
}