/* const date = new Date();
let year = date.getFullYear(); */
const vtubers = [{
    id:1,
    firstName: "Ina'nis",
    lastName: "Ninomae",
    DOB: 1999,
    graduated: false,
   /*  age: function () {
        return year - this.DOB;
    }, */
    spouse: null,
    interests: ["Puns", "Drawing", "Sleeping", "Gaming"],
},
{
    id:2,
    firstName: "Mumei",
    lastName: "Nanashi",
    DOB: 2001,
    graduated: false,
/*     age: function () {
        return year - this.DOB;
    }, */
    spouse: null,
    interests: ["Drawing", "Destroying", "Gaming", "Singing"],
},
{
    id:3,
    firstName: "Pomu",
    lastName: "Rainpuff",
    DOB: 2000,
    graduated: false,
/*     age: function () {
        return year - this.DOB;
    }, */
    spouse: null,
    interests: ["Singing", "Metal Gear Solid", "Gaming", "Idols"],
},
{
    id:4,
    firstName: "Sana",
    lastName: "Tsukumo",
    DOB: 1998,
    graduated: true,
/*     age: function () {
        return year - this.DOB;
    }, */
    spouse: null,
    interests: ["Pokemon", "Drawing", "Gaming", "Singing"],
},
{
    id:5,
    firstName: "Nina",
    lastName: "Kosaka",
    DOB: 1989,
    graduated: true,
/*     age: function () {
        return year - this.DOB;
    }, */
    spouse: null,
    interests: ["Wine", "Mothering", "Crab Gaming", "Ethyria"],
}
];
console.log();
vtubers.forEach((vtuber) => {
    console.log("Vtuber:", vtuber.id);
    console.log(vtuber.firstName)}); //arrow function

vtubers.forEach((vtuber) =>  {
    vtuber.interests.forEach((hobbies) =>{ //nested forEach loop
    console.log(hobbies);
})
})

const graduated = vtubers.filter((vtuber)=> {return vtuber.graduated ===true})
console.log(graduated);
/* 
let nums = [1,2,3,4,5]; //access indivudal elements
let movies = ["SW", "Marvel" , "Barbie"];
//access individual elements from list/array index 
console.log(nums[0]);
console.log(nums[nums.length - 1]); //gets last item
nums.forEach((el) => console.log(el)); //for each loop. For every number in the array, something will happen
movies.forEach((movie) => console.log(movie));
nums.forEach(function (el){
console.log(el);
}); 
 */
//  === arrays ===

// you can store multiple variables into an "array" for later access
/* const arr = [5, 10, 100]; // you declare an array with '[]'

console.log(arr[0]); // access the first element of the array (count starts at 0)
console.log(arr[1]);
console.log(arr[2]);

console.log(arr[3]); // this will give you an `undefined` value, don't do this!!!

// you can put different types of elements in an array, including arrays!
const arr2 = [true, "yay!", 10.63, [1, -2, 3], null];
console.log(arr2); // you can also log the entire array

// === array manipulation ===

// you can add and delete elements using push, pop, shift, and unshift
const exampleArr = [1, 2, 3, 4, 5];
console.log("Array Manipulation Demo:");
console.log(exampleArr);

exampleArr.push(10); // add the number 10 to the end of the array
console.log(exampleArr);

const popped = exampleArr.pop(); // removes the last element and returns it
console.log(exampleArr);
console.log(popped);

const firstElem = exampleArr.shift(); // removes and returns the FIRST element
console.log(exampleArr);
console.log(firstElem);

exampleArr.unshift(1000); // insert 1000 to the beginning of the array
console.log(exampleArr);
 */
/* // === for each and other methods ===
console.log("Array Methods Demo:");
// if you want to do a similar function for each element in an array
// use the forEach method loop:
const anotherArr = [2, 4, 6, 8];
console.log(anotherArr);

anotherArr.forEach(function (element) {
    // forEach accepts a "callback function"
    // this function should accept an input, which is an element in the array,
    // and instructions for how to deal with the input
    console.log(element * 2);
});
// this forEach call logs out the numbers in the array, doubled

anotherArr.forEach((element) => {
    // you can define callback functions with arrow notation
    console.log(element * 3);
});
// NOTE: forEach does not alter the existing array `anotherArr`

// to make mass changes to an array and assign to another variable, use .map()
const altered = anotherArr.map((element) => {
    return element / 2; // it is important to return the changed element
});
console.log(altered);

// to filter elements according to a condition, use .filter()
const filtered = anotherArr.filter((element) => {
    return element > 5; // for .filter(), return a boolean (true | false)
    // only if the return value is true, the element is added to the new filtered array
});
console.log(filtered);  */