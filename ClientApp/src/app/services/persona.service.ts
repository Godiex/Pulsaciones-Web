import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { Persona } from '../pulsacion/models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  Personas = [];
  constructor() { }

  agregar (persona)
  {
    this.Personas.push(persona);
  }

  Obtener()
  {
    return this.Personas;
  }
}
