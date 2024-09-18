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

// 16. why - 
