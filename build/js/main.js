"use strict";
let stringArr = ["one", "hey"];
let guitars = ["three", 4];
let mix = ["five", 1234, true];
let bands = [];
// myTuple
let myTuple = ["s", 1, true];
// Objects
let myObj;
myObj = {};
console.log(typeof myObj);
const exampleObj = {
    prop1: "Dave",
    prop2: true
};
exampleObj.prop2 = false;
let evh = { name: "alex", active: true, albums: [] };
let jp = {
    // name: "akro",
    active: false,
    albums: ["die for ever"]
};
const greetGuitarist = (guitarist) => { var _a; return console.log("Hi ", (_a = guitarist.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()); };
greetGuitarist(jp);
// Enum
