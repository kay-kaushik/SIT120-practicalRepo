
const StringArray = ["Kartik","Vandan", "Sam", "Emily"];
const NumberArray = [20,1,23,14,67];

// fisrt array method to string

console.log(StringArray.toString());

// second array method join

console.log(StringArray.join("<-->"));

// third array method pop

console.log(NumberArray.pop());
console.log(NumberArray);

// fourth array method push

NumberArray.push(12);
console.log(NumberArray);

// fifth array method changing elements

NumberArray[1] = 10;
console.log(NumberArray);

// sixth array method length 

console.log(StringArray.length);
