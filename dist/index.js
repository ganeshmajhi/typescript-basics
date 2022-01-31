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
//console.log(direction1.Left)
var direction2;
(function (direction2) {
    direction2["Up"] = "so";
    direction2["Down"] = "much";
    direction2["Left"] = "love";
    direction2["Right"] = "for";
})(direction2 || (direction2 = {}));
//console.log(direction2.Left)
// Object
const user = {
    id: 1,
    name: 'ganesh'
};
const user2 = {
    id: 1,
    name: 'ganesh'
};
// Type Assortion
let cid = 1;
let customerId = cid;
customerId = 4;
//Example 2
let xid = 'ganesh';
let xumerId = xid;
xumerId = 3;
//Function
function addNum(x, y) {
    return x + y;
}
//console.log(addNum(54,3))
// Void Function
function log(message) {
    console.log(message);
}
const perid = {
    id: 1,
    name: 'gani'
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
//console.log(sub(4,5))
// Classes
class Person {
    constructor(id, name) {
        this.id = id,
            this.name = name;
    }
    register() {
        return `${this.name} is registerd`;
    }
}
const gan = new Person(1, 'ganesh');
// Class
class Gania {
    constructor(soid, name) {
        this.soid = soid;
        this.name = name;
    }
    register() {
        return `${this.name} is registered`;
    }
}
const sus = new Gania(1, 'ganesh');
//console.log(sus.name)
// Extending classes or sub classes
class Emplyoee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Emplyoee(3, 'shaun', 'developer');
//console.log(emp.register())
//Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['ganesh', 'gani', 'gan']);
numArray.push(1);
