interface Reproductor{
    volumen:number,
    segundo:number,
    cancion:string,
    detalles:Detalles
}
interface Detalles{
    autor:String,
    anio:number
}

const reproductor:Reproductor={
    volumen:90,
    segundo:36,
    cancion:"Mess",
    detalles:{
        autor:"ed sheeran",
        anio: 2015
    }

}
console.log("El volumen actual es:", reproductor.volumen)
console.log("El segundo actual es:", reproductor.segundo)
console.log("la cancion actual es:", reproductor.cancion)
console.log("El autor es:", reproductor.detalles.autor)
console.log("El año de salida es:", reproductor.detalles.anio)

const{volumen,segundo,cancion,detalles}=reproductor
const{autor,anio}=detalles

console.log("El volumen actual es:", volumen)
console.log("El segundo actual es:", segundo)
console.log("la cancion actual es:", cancion)

console.log("El autor es:", autor)
console.log("El año de salida es:", anio)

const dbz:string[]=['Goku','Vegeta','Trunks','Piccolo']

console.log('El besto youtuber es: ',dbz[1])

const[p1,,,p2]=dbz
console.log(p2)