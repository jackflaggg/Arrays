'use strict'

const newArr = [
	{id: 1, name: 'Вася', isMarried: true},
	{id: 2, name: 'Расул', isMarried: false},
	{id: 3, name: 'Петя', isMarried: true},
	{id: 1, name: 'Вася', isMarried: true},
];

let arrSet = new Set(newArr.map(elem => newArr.find(item => item.name === elem.name)));
console.log(arrSet)