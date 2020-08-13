import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonagensComponent } from './personagens/personagens.component';
import { PersonagemComponent } from './personagem/personagem.component'
import { HomeComponent } from './home/home.component';
import { PlanetasComponent } from './planetas/planetas.component';
import { SnakecasePipe } from './../snakecase.pipe';

@NgModule({
  declarations: [
    PersonagensComponent,
    PersonagemComponent,
    HomeComponent,
    PlanetasComponent,
    SnakecasePipe,
  ],
  imports: [
    CommonModule
  ],

  exports: [
    PersonagensComponent,
    PersonagemComponent,
    HomeComponent,
    PlanetasComponent,
  ]

})
export class ComponentesModule { }
