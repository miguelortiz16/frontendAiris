import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapaEditarComponent } from './dashboard/mapa-editar.component';
import { ProtectedRoutingModule } from './protected-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

//material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AgmCoreModule } from '@agm/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  entryComponents:[MapaEditarComponent],
  declarations: [DashboardComponent, MapaEditarComponent],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatProgressBarModule,
    MatCardModule,
    MatSnackBarModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAqbDvrfmMaduqgJRetVQ0yaFjb_C-6ayg'
    })
  ],
  exports: [MatSnackBarModule,MatDialogModule,MatInputModule],
})
export class ProtectedModule { }
