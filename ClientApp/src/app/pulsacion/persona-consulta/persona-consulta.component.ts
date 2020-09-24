import { Component, OnInit } from '@angular/core';
import { PersonaService } from '/Descargas/Programacion/Visual Code/Practicas/Pulsaciones/pulsacionesdotnet/ClientApp/src/app/services/persona.service';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-persona-consulta',
  templateUrl: './persona-consulta.component.html',
  styleUrls: ['./persona-consulta.component.css']
})
export class PersonaConsultaComponent implements OnInit {

  constructor(private personaService : PersonaService) { }

  ngOnInit(): void {
    this.personas = this.personaService.Obtener();
  }

  personas = [];


}
