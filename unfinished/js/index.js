// const arr = ['#333', '#fff', 'orange'];
// const btns = document.querySelectorAll('button');
// let div1 = document.querySelector('#app');
// let div2 = document.querySelector('#div');
// btns.forEach(item => {
//     item.addEventListener('click', () => {
//         if (item.id === 'd') {
//             document.body.style.backgroundColor = arr[0];
//         }

//         if (item.id === 'w') {
//             document.body.style.backgroundColor = arr[1];
//         }

//         if (item.id === 'o') {
//             document.body.style.backgroundColor = arr[2];
//         }
//     });
// });
// for (let color of arr) {
//     div.innerHTML += `${color} `;
// }

// let ul = document.createElement('ul');
// for (let color of arr) {
//     let li = document.createElement('li');
//     li.innerHTML += color;
//     ul.appendChild(li);
// }
// div2.appendChild(ul);

// console.log(Array.isArray(arr));
// console.log(arr.length);
// console.log(arr.sort());
// console.log(arr.toString());
// console.log(arr.join(' % '));
// console.log(arr.concat('red', 'gold'));
// console.log(arr.pop());
// console.log(arr.push('yellow'));
// console.log(arr[arr.length] = 'green');
// console.log(arr.slice(1, 3));
// console.log(arr.splice(2, 0, 'pink', 'violet'));
// console.log(arr.sort());
// console.log(arr.reverse());
// console.log([5, 25, 7, 21, 32, 765, 94, 3, 9].sort((a,b) => a - b));
// console.log([5, 25, 7, 21, 32, 765, 94, 3, 9].sort((a,b) => 0.5 - Math.random()));
// console.log(Math.max.apply(null, [5, 25, 7, 21, 32, 765, 94, 3, 9]));
// console.log(Math.min.apply(null, [5, 25, 7, 21, 32, 765, 94, 3, 9]));

// const obj = [
//     {name: 'Koler', age: 63},
//     {name: 'Straiter', age: 24},
//     {name: 'Heldor', age: 80}
// ]
// console.log(obj.sort((a, b) => a.name - b.name));
// obj.sort((a, b) => {
//     let x = a.name.toLowerCase();
//     let y = b.name.toLowerCase();
//     if (x < y) {return -1;}
//     if (x > y) {return 1;}
//     return 0;
// });

// const arr2 = [1, 2, 3, 4, 5];

// const arr3 = arr2.map(x => x * 2);
// console.log(arr3);

// const arr4 = arr2.filter(x => x >= 3);
// console.log(arr4);

// const arr5 = arr2.reduce((total, value) => total + value);
// console.log(arr5);

// const arr6 = arr2.every(x => x > 0);
// console.log(arr6);

// const arr7 = arr2.some(x => x < 3);
// console.log(arr7);

// const pos1 = arr2.indexOf(4) + 1;
// console.log(pos1);

// const pos2 = arr2.lastIndexOf(5) + 1;
// console.log(pos2);

// const first = arr2.find(x => x < 2);
// console.log(first);

// const last = arr2.findIndex(x => x > 2);
// console.log(last);

// console.log(Array.from('lsas fas g dsg asfsa'));
// console.log(Array.from('35235235'));

// const arr8 = arr2.keys();

// for (let x of arr8) {
//     document.querySelector('#key').innerHTML += x;
// }

// const arr9 = arr2.entries();

// for (let x of arr9) {
//     document.querySelector('#enter').innerHTML += x;
// }

// console.log(arr2.includes(1));

// const d = new Date();
// console.log(d);

// document.write(`Yearh: ` + d.getFullYear());
// document.write(`<br>`);
// document.write(`Month: ` + d.getMonth());
// document.write(`<br>`);
// document.write(`Day: ` + d.getDate());
// document.write(`<br>`);
// document.write(`Hours: ` + d.getHours());
// document.write(`<br>`);
// document.write(`Minutes: ` + d.getMinutes());
// document.write(`<br>`);
// document.write(`Seconds: ` + d.getSeconds());

// document.write(new Date().toISOString());

// document.write(new Date().setFullYear(2024, 5, 12));

// console.log(Math.floor(Math.random() * 11));

// const getRndInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(getRndInteger(10, 20));

// console.log(10 > 9);

// let age = prompt('Number?', '52');

// if (age > 18) {
//     console.log('You lol');
// }

// let hour = 15;
// let greeting;

// if (hour < 18) {
//     greeting = 'HAHA';
// } else {
//     greeting = 'Lol..';
// }

// console.log(greeting);

// switch (new Date().getDay()) {
//     case 0:
//         console.log(12);
//         break;
//     case 1:
//         console.log(6689);
//         break;
//     case 2:
//         console.log(1212);
//         break;
//     case 3:
//         console.log(534);
//         break;
//     case 4:
//         console.log(12325);
//         break;
//     case 5:
//         console.log(9821);
//         break;
//     case 6:
//         console.log(2014);
//         break;

//     default:
//         console.log(7185);
//         break;
// }

// const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];
// const str = 'loller';

// for (const iterator of str) {
//     document.write(iterator + '<br>');
// }

// const words = new Set(['king', 'knight', 'newbie']);
// let str = '';

// for (const x of words.values()) {
//     str += x;
// }

// console.log(str);

// const letters = new Map([
//   ["first", 1],
//   ["second", 2],
//   ["third", 3],
// ]);

// console.log(letters);

// letters.set("fourth", 4);
// console.log(letters);

// letters.set('fourth', 5);
// console.log(letters);

// console.log(letters.get('third'));

// console.log(letters.size);

// letters.delete('fourth')
// console.log(letters);

// console.log(letters.has('fourth'));

// let str = '';

// for (const x of letters.entries()) {
//     str += x;
// }

// console.log(str);

// let str = 'lol is not my proBLEM, it\' your PROblem';

// console.log(str.replace(/problem/ig, 'book'));

// try {
// 	if(5 < 6) throw 'ERROR!';
// } catch (error) {
// 	console.log(error);
// } finally {
// 	alert('END');
// }

const person = {
	fname: fn,
	lname: ln,
	age: 25,
	func: function() {
		return console.log(`${this.fname} ${this.lname}`);
	}
};

function myFunc(fname, lname) {
	return console.log(`${fname} ${lname}`);
}

myFunc('Kanno', 'Soushta');
myFunc(person.fname, person.lname);
person.func();
person.func('Lorain', 'Kazmo');