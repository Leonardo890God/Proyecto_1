import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importación de todos los componentes
import { ContadorComponent } from './contador/contador.component';
import { DirectivaNgForComponent } from './directiva-ng-for/directiva-ng-for.component';
import { DirectivaNgIfComponent } from './directiva-ng-if/directiva-ng-if.component';
import { EjemploCliComponent } from './ejemplo-cli/ejemplo-cli.component';
import { EjemploManualComponent } from './ejemplo-manual/ejemplo-manual.component';
import { EnlaceClaseComponent } from './enlace-clase/enlace-clase.component';
import { EnlacePropiedadesComponent } from './enlace-propiedades/enlace-propiedades.component';
import { FormsReactivosComponent } from './forms-reactivos/forms-reactivos.component';
import { FormulariosComponent } from './formularios/formularios.component';
import { PadreComponent } from './padre/padre.component';
import { Padre2Component } from './padre2/padre2.component';
import { Padre3Component } from './padre3/padre3.component';
import { ValidacionesComponent } from './validaciones/validaciones.component';
import { VariablesPlantillaComponent } from './variables-plantilla/variables-plantilla.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ContadorComponent,
    DirectivaNgForComponent,
    DirectivaNgIfComponent,
    EjemploCliComponent,
    EjemploManualComponent,
    EnlaceClaseComponent,
    EnlacePropiedadesComponent,
    FormsReactivosComponent,
    FormulariosComponent,
    PadreComponent,
    Padre2Component,
    Padre3Component,
    ValidacionesComponent,
    VariablesPlantillaComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  component: number = 1;
}