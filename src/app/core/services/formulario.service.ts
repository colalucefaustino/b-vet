import { NgModel } from "@angular/forms";
import { Datos } from "../interfaces/datos";
import { Injectable, WritableSignal, booleanAttribute, numberAttribute } from "@angular/core";
import { Tab1Page } from "src/app/tab1/tab1.page";

@Injectable({
    providedIn: `root`
})

export class DatosService{

    constructor() {
       }

    datos:Datos = {
        nombre: "",
        telefono: "",
        domicilio: "",
        mascota:"",
        fechaTurno: "",
        dias: 0
    }

    generarMensaje(){
        const primeraParte = "https://wa.me/+5493413108624?text="
        const ultimaParte = `Hola! Estaba interesado/a en reservar un turno con el veterinario. Estos serían mis datos: 
        Nombre: ${this.datos.nombre}
        Domicilio: ${this.datos.domicilio}
        Telefono: ${this.datos.telefono}
        La fecha elegida para ver al veterinario: 
        ${this.datos.fechaTurno}
        Mi mascota es un: ${this.datos.mascota}
        `
        return encodeURI(primeraParte+ultimaParte);
    }

    cambiarDias(dias:number): void{
        this.datos.dias = dias;
    }
        


}