"use strict";
// Basic Types
let id = 5;
let company = "21n78e Creative Labs";
let isPublished = true;
let x = "Hello";
// Array
let ids = [1, 2, 3, 4, 5];
let arrs = [1, 3, 'doit', true];
//Tuple
let person = [1, 'ganesh', true];
//Tuple Array
let emplyoee;
emplyoee = [
    [1, 'gani'],
    [2, 'somi'],
    [3, 'romi']
];
//Union
let pid;
pid = 23;
//Enum
var direction1;
(function (direction1) {
    direction1[direction1["Up"] = 1] = "Up";
    direction1[direction1["Down"] = 2] = "Down";
    direction1[direction1["Left"] = 3] = "Left";
    direction1[direction1["Right"] = 4] = "Right";
})(direction1 || (direction1 = {}));
console.log(direction1.Left);
var direction2;
(function (direction2) {
    direction2["Up"] = "so";
    direction2["Down"] = "much";
    direction2["Left"] = "love";
    direction2["Right"] = "for";
})(direction2 || (direction2 = {}));
console.log(direction2.Left);