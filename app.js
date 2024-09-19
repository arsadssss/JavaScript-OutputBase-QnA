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