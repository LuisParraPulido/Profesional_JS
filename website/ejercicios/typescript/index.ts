//Boolean
let muted: boolean = true

//Números
let age = 7
let numerador: number = 42
let denominador: number = age
let resultado = numerador / denominador

//String
let nombre: string = 'Luis'
let saludo = `Me llamo ${nombre}`

//Arreglos
let people: string[] = [] // arreglo de string
people = ["isanel", "ana", "reis"]

let peopleAndNumbers: Array<string | number> = [] //array que permita texto y números

//Enum

 enum Color {
     Rojo = 'Rojo',

     Verde = 'Verde',
     Azul = 'Azul',
 }

let colorFavorito: Color = Color.Azul
console.log(`Mi color favorito es ${colorFavorito}`)

//Any
let comodin: any = 'Joker'
comodin = { type: 'luis' }

//Object
let someObject: Object = { type: 'luis' }

//function

function add(a: number, b: number): number {
    return a + b;
}

const sum = add(4, 6)

function createAdder (a: number): (number) => number {
    return function (b: number) {
        return b + a
    }
}

const addFour = createAdder(4)
const fourPlus6 = addFour(6)

//function fullName(firstName: string, lastName: string): string {
//function fullName(firstName: string, lastName?: string): string {
function fullName(firstName: string, lastName: string = "parra"): string {
    return `${firstName} ${lastName}`
}

const luis = fullName("luis")
console.log(luis)

// Interfaces

interface Rectangulo {
    ancho: number,
    alto: number,
    color?: Color,
}

let rect: Rectangulo = {
    ancho: 4,
    alto: 6, 
    color: Color.Azul
}

function area(r: Rectangulo): number {
    return r.alto * r.ancho
}

const areaRect = area(rect)
console.log(areaRect)

rect.toString = function() {
    return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`
}

console.log(rect.toString())

