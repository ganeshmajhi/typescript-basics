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
console.log(direction1.Left)

enum direction2{
    Up = 'so',
    Down = 'much',
    Left ='love',
    Right ='for'
}
console.log(direction2.Left)