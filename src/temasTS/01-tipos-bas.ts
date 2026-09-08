console.log("Hola mundo")

var num1=23 //Esta en des uso
let num2=25 //Usar este sobre todo
const num3=22

//Es un lenguaje tipado, siempre se debe de establecer el tipo de dato, automaticamente se toma un valor de entero con los numeros.

let nombres:string //Paradeclarar tipo de variable se pone ":" 
let num:number
let activo:boolean

//no es nesesario declarar la variable para poderla usar antes, pero es más versatil

let suma:number = num1+num2+num3

console.log('La suma es: ' + suma) //La declaracion de variables puede causar conflicto si son numero o letras, pero pueden ser varios tipos de datos al mismo tiempo

let matricula:number|string

matricula = 123456
matricula = "ASFA3SE234"

console.log('Tu matricula es: '+ matricula)