"use strict";
// let stringArr: string[] = ["one", "hey"]
// let guitars: (string | number)[] = ["three", 4]
// let mix: (string | number | boolean)[] = ["five", 1234, true]
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// let bands: string[] = []
// // myTuple
// let myTuple: [string, number, boolean] = ["s", 1, true]
// // Objects
// let myObj: Object
// myObj = {}
// console.log(typeof myObj)
// const exampleObj = {
//   prop1: "Dave",
//   prop2: true
// }
// exampleObj.prop2 = false
// type Guitarist = {
//   name?: string
//   active: boolean
//   albums: (string | number)[]
// }
// let evh: Guitarist = { name: "alex", active: true, albums: [] }
// let jp: Guitarist = {
//   // name: "akro",
//   active: false,
//   albums: ["die for ever"]
// }
// const greetGuitarist = (guitarist: Guitarist) =>
//   console.log("Hi ", guitarist.name?.toUpperCase())
// // greetGuitarist(jp)
// // Type Aliases
// type stringOrNumber = string | number
// type stringOrNumberArray = (string | number)[]
// type Singer = {
//   name?: string
//   active: boolean
//   albums: stringOrNumberArray
// }
// // Literal types
// // myName could only be set to Dave or Drake
// let myName: "Dave" | "Drake"
// // Functions
// const add = (a: number, b: number): number => a + b
// const logMsg = (message: any): void => {
//   console.log(message)
// }
// // logMsg("Hello")
// // logMsg(add(1, 5))
// type mathFn = (a: number, b: number) => number
// let multiply: mathFn = (a, b) => a * b
// console.log(multiply(5, 5))
// const addAll = (a: number, b: number, c?: number): number =>
//   typeof c === "number" ? a + b + c : a + b
// // Rest parameters
// const total = (...nums: number[]): number => {
//   return nums.reduce((prev, next) => prev + next)
// }
// // console.log(total(1, 2))
// const createError = (errMsg: string) => {
//   throw new Error(errMsg)
// }
// const infinite = () => {
//   let i: number = 1
//   while (i < 10) {
//     i++
//   }
// }
// const numberOrString = (value: number | string): string => {
//   if (typeof value === "string") return "string"
//   if (typeof value === "number") return "number"
//   return createError("This should never happen")
// }
// // type assertions
// type One = string
// type Two = string | number
// type Three = "Hello"
// // Convert to more or less specific
// let a: One = "hello"
// let b = a as Two
// const addOrConcat = (
//   a: number,
//   b: number,
//   c: "add" | "concat"
// ): number | string => {
//   if (c === "add") return a + b
//   else return a + "" + b
// }
// let myVal: string = addOrConcat(1, 2, "add") as string
// // The DOM
// // const img = document.querySelector("img")!
// // const myImg = document.getElementById("#img") as HTMLImageElement
// // img.src
// // myImg.src
// // const year = document.getElementById("year") as HTMLSpanElement
// // year.textContent = new Date().getFullYear().toString()
// //
// class Coder {
//   constructor(
//     public readonly name: string,
//     public music: string,
//     private age: number,
//     protected lang: string = "Typescript"
//   ) {
//     this.name = name
//     this.music = music
//     this.age = age
//     this.lang = lang
//   }
//   public getAge() {
//     return `Hello, I'm ${this.age}`
//   }
// }
// const Dave = new Coder("akro", "rock", 42)
// console.log(Dave.getAge())
// class WebDev extends Coder {
//   constructor(
//     public computer: string,
//     name: string,
//     music: string,
//     age: number
//   ) {
//     super(name, music, age)
//     this.computer = computer
//   }
//   public getLang() {
//     return `I write ${this.lang}`
//   }
// }
// const Sara = new WebDev("Mac", "Sara", "rock", 20)
// // console.log(Sara.getAge())
// // console.log(Sara.getLang())
// interface Musician {
//   name: string
//   instrument: string
//   play(action: string): string
// }
// class Guitarist1 implements Musician {
//   constructor(public name: string, public instrument: string) {
//     this.name = name
//     this.instrument = instrument
//   }
//   play(action: string): string {
//     return `${this.name} ${action} the ${this.instrument} ${action}`
//   }
// }
// class Peeps {
//   static count: number = 0
//   static getCount(): number {
//     return Peeps.count
//   }
//   public id: number
//   constructor(public name: string) {
//     this.name = name
//     this.id = ++Peeps.count
//   }
// }
// const Corina = new Peeps("Corina")
// const Sarah = new Peeps("Sarah")
// // console.log(Corina.id)
// // console.log(Sarah.id)
// class Bands {
//   private dataState: string[]
//   constructor() {
//     this.dataState = []
//   }
//   public get data(): string[] {
//     return this.dataState
//   }
//   public set data(value: string[]) {
//     if (!Array.isArray(value) || value.some((val) => typeof val !== "string"))
//       throw new Error("error")
//     this.dataState = value
//   }
// }
// const myBands = new Bands()
// myBands.data = ["akro"]
// // console.log(myBands.data)
// // console.log(myBands.data)
// // $ tsc -w
// // Index Signatures
// // interface TransactionObj {
// //   readonly [index: string]: number
// // }
// interface TransactionObj {
//   readonly [index: string]: number
//   Pizza: number
//   Books: number
//   Job: number
// }
// const todaysTransactions: TransactionObj = {
//   Pizza: 1,
//   Books: 2,
//   Job: 44,
//   Dave: 12
// }
// // console.log(todaysTransactions.Pizza)
// // console.log(todaysTransactions["Pizza"])
// // const prop: string = "Pizza"
// // console.log(todaysTransactions[prop])
// // todaysTransactions.Pizza = 5
// interface Student {
//   // [key: string]: string | number | number[] | undefined
//   name: string
//   GPA: number
//   classes?: number[]
// }
// const student: Student = {
//   name: "Akro",
//   GPA: 4.9,
//   classes: [100, 200]
// }
// for (const key in student) {
//   console.log(`${key} : ${student[key as keyof Student]} `)
// }
// Object.keys(student).map((key) =>
//   // console.log(student[key as keyof typeof student])
// )
// const logStudentKey = (student: Student, key: keyof Student): void => {
//   // console.log(`${key} : ${student[key]}`)
// }
// interface Incomes {
//   [key: string]: number
// }
// type Streams = "salary" | "bonus" | "sidehustle"
// type Incomes = Record<Streams, number | string>
// const monthlyIncomes: Incomes = {
//   salary: 100,
//   bonus: 200,
//   sidehustle: 300
// }
// for (const key in monthlyIncomes) {
//   console.log(monthlyIncomes[key as keyof Incomes])
// }
//
// Utility types
// 1- Partial
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
// console.log(
//   updateAssignment(
//     { studentId: "1", title: "do homework", grade: 4 },
//     { studentId: "2", title: "FF", d: 1 }
//   )
// )
// Required and Readonly
const recordAssignment = (assign) => {
    return assign;
};
const assignVerified = {
    studentId: "F12fXC",
    title: "Go dar",
    grade: 10
};
// assignVerified.grade = 11
// Record
const hexColorMap = {
    red: "FF00",
    green: "GG11",
    blue: "TY123"
};
const preview = {
    title: "dd",
    studentId: "ff"
};
const score = {
    studentId: "fff",
    grade: 2
};
// ReturnType
// type newAssign = { title: string; points: number }
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign("x", 10);
const assignArgs = ["dd", 20];
const tsAssign2 = createNewAssign(...assignArgs);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch("http://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .catch((err) => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
});
