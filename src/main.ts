let stringArr: string[] = ["one", "hey"]
let guitars: (string | number)[] = ["three", 4]
let mix: (string | number | boolean)[] = ["five", 1234, true]

let bands: string[] = []
// myTuple
let myTuple: [string, number, boolean] = ["s", 1, true]

// Objects
let myObj: Object
myObj = {}
console.log(typeof myObj)

const exampleObj = {
  prop1: "Dave",
  prop2: true
}

exampleObj.prop2 = false

type Guitarist = {
  name?: string
  active: boolean
  albums: (string | number)[]
}

let evh: Guitarist = { name: "alex", active: true, albums: [] }

let jp: Guitarist = {
  // name: "akro",
  active: false,
  albums: ["die for ever"]
}

const greetGuitarist = (guitarist: Guitarist) =>
  console.log("Hi ", guitarist.name?.toUpperCase())

greetGuitarist(jp)

// Enum
