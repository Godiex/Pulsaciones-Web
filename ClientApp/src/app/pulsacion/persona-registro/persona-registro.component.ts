import { Component, OnInit } from '@angular/core';
import { PersonaService } from '/Descargas/Programacion/Visual Code/Practicas/Pulsaciones/pulsacionesdotnet/ClientApp/src/app/services/persona.service';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-persona-registro',
  templateUrl: './persona-registro.component.html',
  styleUrls: ['./persona-registro.component.css']
})
export class PersonaRegistroComponent implements OnInit {

  persona : Persona = new Persona();
  constructor(
    private personaService : PersonaService
  ) { }

  ngOnInit(): void {
  }

  agregarPersona()
  {
    this.calcularPulsacion ();
    this.personaService.agregar(this.persona);
    window.alert('persona agregada con exito');
  }

  calcularPulsacion ()
  {
    if(this.persona.sexo == 'Masculino')
    {
      this.persona.pulsacion = (210-this.persona.edad)/10;
    }
    else
    {
      this.persona.pulsacion = (210-this.persona.edad)/10;
    }
  }
}
