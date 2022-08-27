//? video No BS TS#1

let userName: string = "Cine"
let hasLoggedIn: boolean = true

console.log(hasLoggedIn)

let myNumber: number = 10
let myRegex: RegExp = /foo/

const names: string[] = userName.split(' ')
const myValues: Array<number> = [1, 2, 3, 4]

interface Person {
    first: string
    last: string
}

const myPerson: Person = {
    first: "Jack",
    last: "Herrington"
}

const ids: Record<number, string> = {
    10: "a",
    20: "b"
}

ids[30] = "c"  //ใส่ Type เป็น Record ถึงจะใส่ได้