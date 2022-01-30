// Basic Types
let id: number = 5
let company: string = "21n78e Creative Labs"
let isPublished: boolean = true
let x:any = "Hello"

// Array

let ids: number[] = [1,2,3,4,5]
let arrs: any[] = [1,3,'doit', true]

//Tuple

let person:[number,string,boolean] = [1,'ganesh',true]

//Tuple Array

let emplyoee:[number, string][]

emplyoee=[
    [1,'gani'],
    [2,'somi'],
    [3,'romi']
]

//Union

let pid: string | number;

pid=23

//Enum

enum direction1{
    Up =1,
    Down,
    Left,
    Right
}
//console.log(direction1.Left)

enum direction2{
    Up = 'so',
    Down = 'much',
    Left ='love',
    Right ='for'
}
//console.log(direction2.Left)

// Object

const user: {
    id: number,
    name: string
} = {
    id: 1,
    name: 'ganesh'
}

type User1={
    id: number
    name: string
}

const user2:User1 ={
    id:1,
    name: 'ganesh'
}
// Type Assortion

let cid: any =1
let customerId = <number>cid

customerId = 4

//Example 2

let xid:any = 'ganesh'
let xumerId = xid as number

xumerId = 3

//Function

function addNum(x:number,y:number):number{
    return x+y
}

console.log(addNum(54,3))

// Void Function

function log(message: string | number):void {
    console.log(message)
}
log('hello')

// Interface - Interface is used for object
interface User4 {
    readonly id: number,
    name: string,
    age?:number
}
const perid:User4 ={
    id:1,
    name:'gani'
}
