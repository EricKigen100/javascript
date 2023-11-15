/* in js data types can be categorised as primitive or complex datatype */

/* primitive/simple datatype include:- string, Number,Boolean,Undefined, Null */

/* non-primtives/complex datatypes include: Object, Array , Functions,Date, RegExp*/

/* we can use the typeof command to check the type of a piece of data or variable */

let country="Kenya"
let age= 90
let isAdult=true
let isAdmin=false
let email
let role=null

/* checking datatypes */

console.log(typeof country); //string
console.log(typeof age); //Number 
console.log(typeof isAdult); //Boolean
console.log(typeof isAdmin); //Boolean
console.log(typeof email);//Undefined
console.log(typeof role) //Null

/* Differentiate between null and undefined in js 
discuss variable naming rules in js
discuss variable naming convections in web development
*/

//object -- a collection of properties and functions for a single entity e.g person

let person = {
    fullName:"Eric Kigen",
    age: 46,
    isMale: true,
    speak:function(){
        console.log("Hello, i am" + this.fullName);
    }
}

//accessing values in an object-- using dot notation and bracket notation

console.log(person.fullName);
//bracket notation -- log person's age
console.log(person["age"]);

//arrays -- a list of elements/items normally separated by coma

let colors=["red","yellow","orange"]
let randomItems = [34,"victor",true, {color:"green",sizeInKgs:80}]
let twoDimensionalArray=[[1,2,3],[4,5,6],[7,8,9]]

//accessing elemets of an array-using index
//arrays are zero indexed-- meaning the first element of an array in at index0 of the array and the second element is at index 1 and so on.. 

let innerItems= randomItems[3]
console.log(innerItems)

console.log(innerItems["sizeInKgs"]);
