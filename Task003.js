//A Schrijf een JavaScript functie om het woord "cool" aan een array met strings toe te voegen. Gebruik de .push method.

const growingArray= (array) => {
    array.push("cool");
    console.log(array);
}
growingArray(["nice", "awesome", "tof"]);

//B Schrijf een JavaScript functie die het aantal elementen in een array retourneert.

const lengthArray= (array) => {
    let size= array.length;
    console.log(size);
}
lengthArray(["appels", "peren", "citroenen"]);

//C Schrijf een JavaScript functie om het éérste element uit een array te retourneren.

const firstArray= (array) => {
    let firstElement= array[0];
    console.log(firstElement);
}
firstArray(["Belgie", "Nederland", "Luxemburg"]);

//D Schrijf een JavaScript functie om het laatste element uit een array te retourneren.

const lastArray= (array) => {
    let size= array.length;
    let lastElement= size-1
    console.log(array[lastElement]);
}
lastArray([1,2,3, "cool"]);
lastArray(["Haas", "Cavia", "Kip", "Schildpad"]);

/*E Schrijf een JavaScript functie om het eerste element uit een array te halen en het restant te retourneren . 
Gebruik .slice én de alternatieve optie .splice. Wat is het verschil tussen deze functies? Hint: mutability.*/

let array1=["Trump", "Obama", "Bush", "Clinton"];
let array2=["Trump", "Obama", "Bush", "Clinton"];

const newArray= (array1) => {
    console.log(array1.slice(1));
}
newArray(array1);

console.log(array1);


const new2Array= (array2) => {
    console.log(array2.splice(1));
}
new2Array(array2);

console.log(array2);

//splice methode modifies your old array variable. 
//F Write a simple JavaScript program to join all elements of the following array into a string (with spaces)
const stringArray= ['Winc', 'Academy', 'is', 'leuk', ';-}'];

const transformInto= (stringArray) => {
    console.log(stringArray.join(" "));
}

transformInto(stringArray);

/*G Schrijf een functie die 2 arrays ['array 1'] ['array2'] combineert tot 1 array ['array1', 'array2']*/
const combineArrays= (array1, array2)=> {
    console.log(array1.concat(array2));
}
combineArrays([1,2,3], [4,5,6]);
 