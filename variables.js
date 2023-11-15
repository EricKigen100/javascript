/* variables are a way to store data in computer memory as out program is running */
/* In js we can create/initialize variables using three keywords- var, let and const */

/* examples */
var username= "Eric Kigen"
let email= "erickigen100@gmail.com"
const height=5.8

/* using variable*/
console.log(username);
console.log(email);
console.log("Eric is" + height*0.3084+ "meters tall")

/* console.log(something) is a developer tool to allow us chech state of data (something) 
in our program via the browser console or the terminal/cli*/

/* let and const are block scoped while var is function scoped */
{
var one=1
let two=2/* value can be modified */
const three =3 /* value can not be changed/modified */
two=4;
console.log(two); //4
three=90 /* typeError-assignment */
}
console.log(one);
console.log(two);
console.log(three);