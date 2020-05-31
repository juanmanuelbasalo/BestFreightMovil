import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Freight } from '../Modelos/Freight';
import { ApiService } from '../services/api.service';
import { AlertController } from '@ionic/angular';
import { TranslateConfigService } from '../services/translateConfig.service';

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
language: string;
regionsDestino: any;
paisesDestino: any;
regDestino: any;
public checks = [
  { val: 'Pepperoni', isChecked: false },
  { val: 'Sausage', isChecked: false },
  { val: 'Mushroom', isChecked: false },
  { val: 'Pepperoni', isChecked: false },
  { val: 'Sausage', isChecked: false },
  { val: 'Mushroom', isChecked: false }
];

constructor(public apiService: ApiService, public alertController: AlertController,
            private translateConfigService: TranslateConfigService) {
  this.data = new Freight();
  this.regions = [];
  this.paises = [];
  this.regDestino = [];
  this.paisesDestino = [];
  this.regionsDestino = [];
  this.getAllRegions();
  this.getAllRegionsDestino();
  this.type = 'container';
  this.language = translateConfigService.getCurrentLanguage();
  this.nombre = (this.language.includes('es')) ? 'Flete Maritimo' : 'Sea Freight';
}

changeModule(myFlag: number) {
  this.myFlag = myFlag;
  if (myFlag === 1) {
    this.type = 'container';
    this.nombre = (this.language.includes('es')) ? 'Contenedor LLeno - FCL' : 'Full Container - FCL';
  }
  if (myFlag === 2) {
    this.type = 'carga_suelta';
    this.nombre = (this.language.includes('es')) ? 'Carga Suelta-Mudanzas-Vehículos' : 'Loose Cargo-Vehicles-Others';
  }
  if (myFlag === 3) {
    this.type = 'carga_proyecto';
    this.nombre = (this.language.includes('es')) ? 'Carga Suelta de Proyecto' : 'Project Cargo';
  }
}

async onSubmit(form: NgForm) {
  const jsonVar = this.data.createJson(form, this.myFlag, this.type);
  console.log(jsonVar);
  this.apiService.createItem(jsonVar).subscribe((response) => {
    console.log(response);
  });
  const alert = await this.alertController.create({
    header: (this.language.includes('es')) ? 'Enviado!' : 'Sent!',
    message: (this.language.includes('es')) ? 'Verifique confirmación en su email.' : 'Verify your email for confirmation.',
    buttons: ['OK']
  });
  await alert.present();
}
onImagePicked(imageData: string) {

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
