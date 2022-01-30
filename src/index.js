// Basic Types
var id = 5;
var company = "21n78e Creative Labs";
var isPublished = true;
var x = "Hello";
// Array
var ids = [1, 2, 3, 4, 5];
var arrs = [1, 3, 'doit', true];
//Tuple
var person = [1, 'ganesh', true];
//Tuple Array
var emplyoee;
emplyoee = [
    [1, 'gani'],
    [2, 'somi'],
    [3, 'romi']
];
//Union
var pid;
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
var user = {
    id: 1,
    name: 'ganesh'
};
var user2 = {
    id: 1,
    name: 'ganesh'
};
// Type Assortion
var cid = 1;
var customerId = cid;
customerId = 4;
//Example 2
var xid = 'ganesh';
var xumerId = xid;
xumerId = 3;
//Function
function addNum(x, y) {
    return x + y;
}
console.log(addNum(54, 3));
// Void Function
function log(message) {
    console.log(message);
}
log('hello');
