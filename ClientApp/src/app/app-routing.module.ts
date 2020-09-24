import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { PersonaConsultaComponent } from './Pulsacion/persona-consulta/persona-consulta.component';
import { PersonaRegistroComponent } from './Pulsacion/persona-registro/persona-registro.component';

const routes: Routes = [];


@NgModule({
  imports: [RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'registro', component: PersonaRegistroComponent },
      { path: 'consulta', component: PersonaConsultaComponent },

    ]),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
