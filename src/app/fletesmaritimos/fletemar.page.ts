import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Freight } from '../Modelos/Freight';
import { ApiService } from '../services/api.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-flete',
  templateUrl: 'fletemar.page.html',
  styleUrls: ['fletemar.page.scss'],
})
export class FletemarPage {
public myFlag: number = 1;
public data: Freight;
public nombre: String;
regions: any;
paises: any;
reg: any;
type: string;

regionsDestino: any;
paisesDestino: any;
regDestino: any;

constructor(public apiService: ApiService, public alertController: AlertController) {
  this.data = new Freight();
  this.regions = [];
  this.paises = [];
  this.regDestino = [];
  this.paisesDestino = [];
  this.regionsDestino = [];
  this.getAllRegions();
  this.getAllRegionsDestino();
  this.type = 'container';
  this.nombre = 'Flete Maritimo';
}

changeModule(myFlag: number) {
  this.myFlag = myFlag;
  if (myFlag === 1) { this.type = 'container'; this.nombre = 'Contenedor LLeno - FCL'; }
  if (myFlag === 2) { this.type = 'carga_suelta'; this.nombre = 'Carga Suelta-Mudanzas-Vehículos'; }
  if (myFlag === 3) { this.type = 'carga_proyecto'; this.nombre = 'Carga Suelta de Proyecto'; }
}

async onSubmit(form: NgForm) {
  const jsonVar = this.data.createJson(form, this.myFlag, this.type);
  console.log(jsonVar);
  this.apiService.createItem(jsonVar).subscribe((response) => {
    console.log(response);
  });
  const alert = await this.alertController.create({
    header: 'Exito!',
    message: 'Se envio su cotizacion con exito y una confimacion a su email.',
    buttons: ['OK']
  });
  await alert.present();
}

checkCountry() {
  this.paises.length = 0;
  this.getAllCountries();
}
checkCountryDestino() {
  this.paisesDestino.length = 0;
  this.getAllCountriesDestino();
}
getAllRegions() {
  this.apiService.getListRegions().subscribe(response => {
    this.regions = response.regiones;
  });
}

getAllCountries() {
  this.apiService.getListCountriesByRegion().subscribe(response => { 
      for (let i = 0; i < response.paises.length; i++) {
        if (this.reg === response.paises[i].id_region) {
          this.paises.push(response.paises[i]);
        }
      }
  });
}

getAllRegionsDestino() {
  this.apiService.getListRegions().subscribe(response => {
    this.regionsDestino = response.regiones;
  });
}

getAllCountriesDestino() {
  this.apiService.getListCountriesByRegion().subscribe(response => { 
      for (let i = 0; i < response.paises.length; i++) {
        if (this.regDestino === response.paises[i].id_region) {
          this.paisesDestino.push(response.paises[i]);
        }
      }
  });
}
}
