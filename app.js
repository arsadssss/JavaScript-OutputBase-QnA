//1. why - Because of memory location - Both memory location is differnet

// let a = [];
// let b = [];

// console.log(a == b);
// console.log(a === b);
// output - false | false

//2. Why - because memory location will also be asign

// let a = [];
// let b = a;

// console.log(a == b);
// console.log(a === b);
// output - true | true

//3. Why - it will compare value. In empty array memory location will compare;

// let a = [20];
// let b = [20];

// console.log(a[0] == b[0]);
// console.log(a[0] === b[0]);
// output - true | true

//4. Why - due to three dot array or object will be destructure and it will become string

// let z = [1,2,3,4];
// let a = {name: "arsad"};

// console.log(...z);
// output - 1,2,3,4 - string

//5. Why - its a special type of number

// console.log(typeof NaN);

// output - number

// 6. why - coz - and - become +

// let data = 10 - -10;
// console.log(data);

// output - 20

// 7 why - set is like a method or array/object - it is used to remove the duplicate number 
// const set = new Set([1,1,2,3,4]);

// console.log(set);

//Output - [1,2,3,4]

//8. Why - if operation is perform succes then it will come true or false;

// let data = {name: "Arsad"};

// console.log(delete data.name);

// output - true

// 9. why - directly we can't delete object so it will come false
// const data = { name: "Arsad"};
// console.log(delete data);

// output - false

// 10. why - it will take only first element, if we want to take Anil then we have to give one more v [y, zariable with y 
// const data = ["Peter", "Anil", "Sam"];

// const [y] = data;
// console.log(y);

// output - peter 

// 11. why - we need to give , before y to get second value
// const data = ["Peter", "Anil", "Sam"];
// cont [,y] = data; - to get second value
// console.log(y);
// output - Anil

// 12. why - how to get name without using . operator
// const data = {name: "Arsad", age:25, skill:"JS"};
// const {name} = data;
// console.log(name);
// output - Arsad

// 12. why- using spread operator
// let data = {name: "Arsad", age:25, skill:"JS"};
// let info = {city: "noida", num:786, mail:"JS@ml"};
// merge 2 objects
// data = {...data, ...info}
// console.log(data);

// output - will be merge objects

// 13. why - data will be new property and infor will will also come as a destructure
// let data = {name: "Arsad", age:25, skill:"JS"};
// let info = {city: "noida"};
// data = {data, ...info}
// console.log(data);
// output - data: Object { name: "Arsad", age: 25, skill: "JS" }

// 14. why - position will be same value will be new
// let data = {name: "Arsad", age:25, skill:"JS"};
// let info = {city: "noida", skill:"ReactJs"};
// data = {...data, ...info}
// console.log(data);
// output - Object { name: "Arsad", age: 25, skill: "ReactJs", city: "noida" }

// 15. why - 
// let name = 'Arsad';
// console.log(name());

// Output - name is not a function

// 16. why - or || operator will always check first positive value, 
// const result = false || {} || null;
// console.log(result);
// output - {}

// 17. why - if there is not positive /true value then in it show last valuye
// const result = null || false || '';
// console.log(result);
// output - '' - empty string

// 18. why - coz array is a true value
// const result = [] || 0 || true;
// console.log(result);
// output - []

// 19. why-
// console.log(Promise.resolve(5));

// output - Promise { <state>: "fulfilled", <value>: 5 }

// 20. why - it will compare emoji unicode 
// console.log("😍" === "😍");

// Output - true

// 21. why - 
// JSON.parse();
//what this method will do
// A: parses JSON to a javascript Value
// B: parses Javascript to Object Json
// C: parses Any Javascript value to Json
// C: parses JSON to a Javascript Object only
// Output - A: parses JSON to a javascript Value

// 22. Why - if we will use var then only can hoisting the value before initialization. Let/Const can't be hoisted
// let name = 'sidhu';
// function getName(){
//     console.log(name);
//     let name = 'anil';
// }
// getName();
// Output - Error

// 23. Why - here let is global variable and that can be access anywhere.
// let name = 'anil';
// function getName(){
//     console.log(name);

// }
// Output -anil

// 24. why - this is ('I Love') inside the arrow function
// console.log(`${(x => x)('I Love')} to program`);
// Output- I love to program

// 25. why - 
// Output should be 6
// function sumValue(x, y, z){
//     return x + y+ z;
// }
// console.log(sumValue([...1,2,3]))
// console.log(sumValue([...[1,2,3]]))
// console.log(sumValue(...[1,2,3]))
// console.log(sumValue(1,2,3))
// output - c and D

// 26. why - cox there are two compare first will be ! operaton then compare  [Left to right]
// const name = 'Arsad is a developer';
// console.log(!typeof name === 'object'); // if we compare false to false value will be false 
// console.log(!typeof name === 'string');
// output - false | False

// 27. why -  
// const name = "Arsad";
// const age = 31;
// console.log(isNaN(nam));  // true
// console.log(isNaN(age)); // false
// Output -  true \ false

// 28. why - when we use seal method then we can't add more value in the object but we can modify the value
// let person = { name : "Arsad"};
//what can modify person object
// Object.seal(person);
// person.name = "Ansari";
// person.age = 25;
// console.log(person);
// output - Ansari

// 29. why - 
// let data = [2,9,0,10];
// remove first Element
// data.shift();
// console.log(data);
// Output - [9,0,10];

// 30. why - 
// let data = [2,9,0,10];
// remove first Element
// data.pop();
// console.log(data);
// Output - [2,9,0];

// 31. why - 
// check any value is odd or event
// let a = 31;
// if(a%2 === 0){
// console.log(a + ' is a even');
// }else{
//     console.log(a + ' is a odd');
// }
// output - even

// 32. why - 
// let data = {name: "Arsad"}
// delete data.name;
// console.log(data);
// output - {}

// 33. Q - how to convert true value into boolean false value
// let data = "true";
// console.log(typeof !data);
// output - boolean

// 34. Q - convert data to boolean true value 
// let data = "true";
// console.log(!!data);
// output - true

// 35. Q - what is different btw forEach and map function
// Ans -  map function will always return but forEach is not return always
// Output - 

// 36. why - it will delete only value, index no. will be there. value will be empty
// let data = ["Anil", "Peter", "blue"];
// delete data[1];
// console.log(data);
// output - Array(3) [ "Anil", <1 empty slot>, "blue" ];
// 37. why - after delete value length will be same
// let data = ["Anil", "Peter", "blue"];
// delete data[1];
// console.log(data.length);
// output - 3

// 38. why -  how to merge two arrays;
// let a = [1,2,3]; 
// let b = [4,5,6]; 
// let c = [...a,...b];
// console.log(c);
// output - [1,2,3,4,5,6];

// 39. why - in object same property can't be exit but in array same value can exist on diffent index 
// let a = [1,2,3,4]; 
// let b = [4,5,6]; 
// let c = [...a,...b];
// console.log(c);
// output - [1,2,3,4,4,5,6];

// 40. why - it will make 3 cube 3
// let c = 3 ** 3;
// console.log(c);
// output - 27

// 41. why - set will go to stack it will host for another code to be execute.
// let a = 2;
// setTimeout(()=>{
//     console.log(a);
// }, 0);
// a = 100;
// output - 100

// 42. why - javascript is a caseSensitive
// let a = 10;
// let A = 20;
// console.log(A)
// output - 20

// 43. why - in javascript there is a rule for creating the variable names
// let A10 = "like";
// let 10A = "likey";
// console.log(A10) - Possible
// console.log(10A) - Invalid

// 45. just to check the confidence
// let a = 'like';
// let b = `like`;
// console.log(a === b);
// output - true

// 46. Why - first decreament then compare 
// let a = 1;
// let c = 2;
// console.log(--c === a);
// Output -  true

// 46. Why -  after a & b compared so it become true means bollean and c is still number to it become false
// let a = 1;
// let b = 1;
// let c = 2;
// console.log(a === b === --c);
// Output -  false

// 47. why -
// console.log(3*3) // 9
// console.log(3**3) // 27
// console.log(3***3); // error

// 48. why - hoisting property
// console.log(a)
// var a;
// output - undefined

// 49. why - not declare
// console.log(b);
// output- not defined

// 50. why - it is a nested array 
// console.log([[[[]]]]);
// output - nested array 

// 51. how to find OS in js
// navigator.platform
// output - window - 32

// 52. why - becoz for is a reserved keyword 
// let for = 100;
// output - unexpedted token for 

// 53. why - 
// function fruit(){
//     console.log(name); // undefined due to hoisting using car
//     console.log(price); // error becouse of let variable
//     var name = "apple";
//     let price = 20;
// }
// fruit();
// output - 

// 54. why - due to global variable and i is a global varibale here and due to setTimeout i will be stored in the stack so it will print after every process to output will be 3
// for(var i = 0; i < 3; i++){
//     setTimeout(()=>{
//         console.log(i)
//     },1);
// }
// output - 3 3 3

// 55. why - let is a scope variable . In setTimeout everytime goes different i value due to scope variable.
// for(let i = 0; i < 3; i++){
//     setTimeout(()=>{
//         console.log(i)
//     },1);
// }
// output - 0 1 2

// 56. why - when we add + before in any value that become number
// console.log(+true);
// console.log(typeof +true);
// output - 1 | true

// 57. why - because opposite of string is booelan so it become false
// console.log(!"anil"); // false
// console.log(typeof("anil"));  // string
// output -  false | string

// 58. why - 
// let data = "size";
// const bird = {
//     size: "small",
// };
// console.log(bird[data]); // small
// console.log(bird["size"]);// small
// console.log(bird.size); // small
// console.log(bird.data); // undefined

// 59. why - becaouse here location will be copy so if location is same then value will be same
// let c = { name : "peter"}
// let d;
// d = c;
// c.name = "anil",
// console.log(d.name);
// output - anil

// 60. why - variable (var) can be declare again and again
// var x;
// var x=  10;
// console.log(x);
// output - 10;

// 61. why - a will be normal number type but b will be used as a object constructor so it is object now. 
// let a = 3;
// let b = new Number(3);

// console.log(a == b); // true
// console.log(a === b); // false
// output -  true | false 

// 62. why - 
// let name;
// nmae = {} // typo
// console.log(name); // blank
// console.log(nmae); // blank object

// 63. why - fruit.name will not effect the function
// function fruit(){
//     console.log("Woof!");
// }
// fruit.name = "apple";
// fruit ();
// output - Woof!

// 64. why - both will become the string
// function sum(a, b){
//     return a + b;
// }
// console.log(sum(1, "2"));
// output - 12

// 65. why - first console then post increament then increament of post increatemt then simply increamented value
// let number = 0;
// console.log(number++);
// console.log(++number);
// console.log(number);
// output 0 2 2

// 66. why - coz after using spread operator it become array
// function getAge(...args){
//     console.log(typeof args);
// }
// getAge(21);
// output - objects

// 67. why - if we use 'use strict' then variable should be declare. in 'useStrick" case hoisting also will not work. 
// function getAge(){
//     'use strict' // now output will be error
//     age = 20; // if we dont write any variable type then it will become var automatically
//     console.log(age);
// }
// getAge();
// output - 20

// 68. why - eval function will convert string value into expression and give the evaluated value
// const sum = eval('10*10+5');
// console.log(sum);
// output - 105

// 69. Q - how long is cool_secret accessible?
// sessionStorage.setItem('cool_secret', 123);
// Ans - session storage will be remove once we close the tab. local storage will no remove untill we remove manually

// 70. why - as we can't declare a variable as a number but as a property we can define number
// const obj = {1: "a", 2: "b", 3: "c"};
// console.log(obj.hasOwnProperty("1"));
// console.log(obj.hasOwnProperty(1));
// output - true | true

// 71. why - position will be same but value will update
// const obj = { a: "one", b:"two", a:"three"}
// console.log(obj);
// output - {a:"three", b:"two"}

// 72. why - 3 will be skiped due to continue
// for(let i = 1; i< 5; i++){
//     if(i === 3) continue
//     console.log(i);
// }
// output - 1 2 4

// 73. why - due to setTimeout  it will go to stack will execute after all execution
// const foo = () => console.log('first');
// const bar = () => setTimeout(()=>console.log('second')) ;
// const baz = () => ()=>console.log('third');
// foo();
// bar();
// baz();
// output - first | third | second 

// 74. why - first will call child then parent.. from child to parent
{/* <div onclick="console.log('first)">
    <div onclick="console.log('second)">
       <button onclick="console.log('button)">
        click!
       </button>
    </div>
</div> */}
// output - button | second | first 

// 75. why - 
// const person = {name: 'arsad'};

// function sayHi(age){
//     return `${this.name} is ${age}`;
// }

// console.log(sayHi.call(person, 21)); // it will work perfectly
// console.log(sayHi.bind(person, 21)); // it will return function. we have to call this function after bind then it will return value 

// 76. why - because 0 is a number | it will not check boolean here.
// function sayHi(){
//     return(()=> 0)();
// }
// console.log(typeof sayHi());
// output - number 

// 77. why - if we use iife then it will be number else ot will be function.
// function sayHi(){
//         return()=> 0;
//     }
//     console.log(typeof sayHi());
// output - function 

// 78. why - type of 1 is number and number is a string
// console.log(typeof typeof 1);

// output - string 

// 79. why - between 2 to 5 index will be empty
// const numbers = [2,1,2];
// numbers[6] = 11;
// console.log(numbers);
// output - [2,1,2, empty x 3, 11];

// 80. why - it will be infinite array. On every 9th index this arrow will repeate.
// const numbers = [2,1,2];
// numbers[9] = numbers;
// console.log(numbers);

// 81. Q - everything in javascript is a 
// a. primitive or Object  -- Right
// b. function  or object 
// c. only objects
// d. number or object 

// 82. why - 
// console.log(!!null); false
// console.log(!!""); false
// console.log(!!1); true

// 83. why - setInterval will always return a ID for clearTimeout
// console.warn(console.log(setInterval('Hi'), 1000));
// console.warn(console.log(setInterval('Hi'), 1000));
// console.warn(console.log(setInterval('Hi'), 1000));

// 84. why - string will become array and due to spread it will asign on different index
// console.log([..."arsad"]);
// output - ['a','r','s','a','d'];

// 85- why - becouse secondPromise will resolve first. If we use .race means it will return that who will will the race.
// const firstPromise = new Promise((res, rej) =>{
//     setTimeout(res, 500, 'one');
// });

// const secondPromise = new Promise((res, rej)=>{
//     setTimeout(res, 100, 'two');
// });

// Promise.race([firstPromise, secondPromise]).then(res => console.log(res));
// output - two 

// 86. why - becouse memory location changed
// let person = { name: 'peter'};
// const numbers = [person];
// person = null;
// console.log(numbers);
// output - { name: 'peter'}

// 87. why - it will return a keys
// const person = {
//     name: 'batman',
//     age: 21
// };

// for(const item in person){
//     console.log(item);
// }
// output - name | age 

// 88. why - number + string = string
// let data = 3 + 4 + '5';
// console.log(data);
// console.log(typeof data);
// output - string 

// 89. why - it will check first and others will be added with typeof
// console.log(typeof 3 + 4 + '5');
// output - number45

// 90. why - if we insert + sign before any string it will become a string
// console.log(typeof (3 + 4 + +'5'));
// output - number 

// 91. why - it will compare memory location that will be different
// console.log([] == []);
// output - false

// 92. why - if nothing will be with return then it will be undefined
// let data = [1,2,3].map(num =>{
// if(typeof num === 'number') return;
// return num * 2;
// });

// console.log(data);

// output - [ undefined, undefined, undefined ];

// 93. why - when we send an object to a function it sends call by refrence so memory location will also send so we can able to change the name.
// function getInfo(member){
//     member.name = 'arsad';
// }
// const person = {name: 'Ismat'};

// getInfo(person);
// console.log(person);

// output - {name: 'arsad'};

// 94. why - if we use return it will override the value
// function Car(){
//     this.make  = 'tata';
//     return {make : 'Kia'};
// }
// const myCar = new Car();
// console.log(myCar.make);
// output - 

// 95. why - X is defined inside a block so it is a block  variable
// (()=>{
//     let x = ( y = 10);
// })();
// console.log(typeof x);
// output - undefined

// 96. why - Y is not defined inside so it is a variable &  a global variable
    // (()=>{
    //     let x = y = 10;
    // })();
    // console.log(typeof y);
    // output - number

// 97. why - diff diff function and it a function and x is scope level variable
//     (()=>{
//         let x = 10;
//     })();
//     (()=>{
//         let x = 10;
//     })();
//     console.log(typeof x);
// output - undefined  

// 98. why - scope variable can be declare again and gain

// (()=>{
//     let x = y = 10;
// })();
// (()=>{
//     let x = y = 20;
// })();
// console.log(y);
// output - 20

// 99. why - 
// let x = 100;
// (()=>{
//  var x = 20;
// })();
// console.log(x);
// output - 100

// 100. why - 
// console.log(!true - true);

// 101. why - -1
// console.log(true + +"10");
// output - 11