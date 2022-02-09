// Old loops
// While loop 
const colors = ["yellow", "blue", "red", "orange"];
let i = 0;
while (i < colors.length) {
    console.log(colors[i]);
    i++;
}
// For loop
for (let i =0; i < colors.length; i++) {
    console.log(colors[i]);
}

// New loops 
// Array methods
const array = ["yellow", "blue", "red", "orange"]; // array = colors in this exc.
colors.forEach(Element => console.log(Element));

// Answer:
// For loop takes 3 lines .
// While loop takes 5 lines .
// forEach take 1 line .
// Array methods 
// like forEach is more easily readable .

const theColors = {
    fruitColor: "yellow",
    skyColor: "blue",
    flowerColor: "red",
    juiceColor: "orange",
    milkColor: "white"
};
for (let property in theColors) {
    console.log(theColors[property]);
}
// Answer:
// Yes 
// Only array have array methods 