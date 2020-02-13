import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Freight } from '../Modelos/Freight';
import { ApiService } from '../services/api.service';
import { AlertController } from '@ionic/angular';
import { TranslateConfigService } from '../services/translateConfig.service';

@Component({
  selector: 'app-flete',
  templateUrl: 'fleteaereo.page.html',
  styleUrls: ['fleteaereo.page.scss'],
})
export class FleteaereoPage {
public myFlag = 1;
public data: Freight;
public type: string;
language: string;
paises: any;
paisesDestino: any;
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
  this.type = 'air';
  this.paises = [];
  this.paisesDestino = [];
  this.getAllCountries();
  this.getAllCountriesDestino();
  this.language = translateConfigService.getCurrentLanguage();
}

changeModule(myFlag: number) {
  this.myFlag = myFlag;
}

async onSubmit(form: NgForm) {
  console.log(form.value);
  const jsonVar = this.data.createJson(form, this.myFlag, this.type);
  console.log(jsonVar);
  this.apiService.createItem(jsonVar).subscribe((response) => {
    console.log('success');
  });
  const alert = await this.alertController.create({
    header: (this.language.includes('es')) ? 'Exito!' : 'Sent',
    message: (this.language.includes('es')) ? 'Enviado, verifique confirmación en su email.' : 'Verify your email for confirmation.',
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

getAllCountries() {
  this.apiService.getListCountriesByRegion().subscribe(response => { 
      for (let i = 0; i < response.paises.length; i++) {
          this.paises.push(response.paises[i]);
      }
  });
}


getAllCountriesDestino() {
  this.apiService.getListCountriesByRegion().subscribe(response => { 
      for (let i = 0; i < response.paises.length; i++) {
          this.paisesDestino.push(response.paises[i]);
      }
  });
}
}
