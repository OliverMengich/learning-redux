import {compose, pipe} from 'lodash/fp';
// function sayHello(){
//     return function(){
//         return 'Hello world'
//     }
// }
//==============================
// let fn = sayHello;
// fn()
// function greet(fnMessage){
//     console.log(fnMessage());
// }
// greet(sayHello);
//========
// let fn = sayHello();
// let message = fn();

//============================
// let input = "   Javascript     ";
// let output = "<div>" + input.trim()+"</div>";
// const trim = str =>str.trim();
// const toLowerCase = str =>str.toLowerCase();
// const wrapInDiv = str => `<div>${str}</div>`;
// // const transform = compose(wrapInDiv,toLowerCase,trim);
// // const transform = pipe(trim,toLowerCase,wrapInDiv);
// // transform(input);
// const wrap = type => str =>`<${type}>${str}</${type}>`;
// const transform = pipe(trim,toLowerCase,wrap('div'));
// console.log(transform(input));
// const person = {
//     name: 'John', 
//     address: {
//         class: '2018',
//         course: 'Mechatronics'
//     }
// }
// const newPerson  ={
//     name: 'Dan', 
//     address: {
//         ...person.address,
//         class: '2020'
//     },
//     ...person
// }
// // newPerson.address.class = '2020'
// console.log(person)
const numbers = [1,2,3];
const index = numbers.indexOf(2);
//Adding
const added = [
    ...numbers.slice(0, index),
    4,
    ...numbers.slice(index)
]
console.log(added)
//Removing
const removed = numbers.filter(n => n !=2);
console.log(removed)

//Updated
const n = numbers.map(n=> n === 2 ? 20: n);
console.log(n)