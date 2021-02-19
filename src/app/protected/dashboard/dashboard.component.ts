import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { Marcador } from '../../classes/marcador.class';
import { MouseEvent } from '@agm/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { MapaEditarComponent } from './mapa-editar.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
    `
      * {
        margin: 5px;
      }
      .grid-container {
        display: grid;
        grid-template-columns: auto auto auto;
        background-color: #000080;
        padding: 5px;
      }
      .grid-item {
        background-color: #000080;
        padding: 10px;
        font-size: 40px;
        text-align: center;
        color:white;
      }
      hr{ 
        background-color: #000080;
      }
      agm-map {
        height: 300px;
      }
      .mat-card-header {
        background-color: blue !important;
        padding: 5px !important;
    }
    

    mat-card{
      background:white !important;
      height:1000px!important;
    }
    agm-map{
      height:800px !important;
    }
    `
  ]
})
export class DashboardComponent  implements OnInit{
  marcadores: Marcador[] = [];

  lat = 4.570868;
  lng = -74.297333;
  get usuario() {
    return this.authService.usuario;
  }


  constructor( public dialog: MatDialog,private snackBar: MatSnackBar,private router: Router,
               private authService: AuthService ) {
     
      const nuevoMarcador = JSON.parse(localStorage.getItem('marcador') || '1');
     
    for (let index = 1; index < nuevoMarcador.length; index++) {
      this.marcadores.push(nuevoMarcador[index]);
      
    }
     
                }

  logout() {

    this.router.navigateByUrl('/auth');
    this.authService.logout();

  }
  ngOnInit() {
    
    
  }
  agregarMarcador(event:MouseEvent) {
    // const coords:{lat:number,lng:number}=event.coords;

    const nuevoMarcador=new Marcador(event.coords.lat,event.coords.lng);
      
    this.marcadores.push(nuevoMarcador);
    this.guardarStore();
   
   
  }
  deleteMar(i:any){
this.marcadores.splice(i,1);
this.guardarStore();
this.snackBar.open('Marcador Borrado', 'cerrar',{duration:3000});
  }
  editMar(marcador:Marcador){
    const dialogRef = this.dialog.open(MapaEditarComponent, {
      width: '250px',
      data: { desc: marcador.desc,lng: marcador.lng,lat: marcador.lat }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    if (!result) {
      return;
      
    }
    marcador.desc=result.desc;
    marcador.lng=parseFloat(result.lng);
    marcador.lat=parseFloat(result.lat);
    this.guardarStore()
    this.snackBar.open('Marcador actualizado', 'cerrar',{duration:3000});
    });
  }
  guardarStore() {
    localStorage.setItem('marcadores',JSON.stringify(this.marcadores));
    this.snackBar.open('Marcador Agregado', 'cerrar',{duration:3000});
  }

}
