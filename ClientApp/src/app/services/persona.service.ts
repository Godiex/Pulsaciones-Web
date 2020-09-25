import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { Persona } from '../pulsacion/models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  Personas = [];
  constructor() { }

  get(): Persona[] {
        return JSON.parse(localStorage.getItem('datos'));
  }
    
  post(persona: Persona) {
        let personas: Persona[] = [];
        if (this.get() != null) {
          personas = this.get();
        }
        personas.push(persona);
        localStorage.setItem('datos', JSON.stringify(personas));
  }
    
    
}
