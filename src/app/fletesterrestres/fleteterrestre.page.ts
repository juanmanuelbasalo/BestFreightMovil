import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { ApiService } from '../services/api.service';
import { Freight } from '../Modelos/Freight';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-flete',
  templateUrl: 'fleteterrestre.page.html',
  styleUrls: ['fleteterrestre.page.scss'],
})
export class FleteterrestrePage {
public myFlag: number = 1;
public data: Freight;
public type: string;
public nombre: String;

paises: any;
paisesDestino: any;

  constructor(public apiService: ApiService, public alertController: AlertController) {
    this.data = new Freight();
    this.type = 'terrestre_cont';
    this.paises = [];
    this.paisesDestino = [];
    this.getAllCountries();
    this.getAllCountriesDestino();
    this.nombre = 'Flete Terrestre';
  }

  changeModule(myFlag: number) {
    this.myFlag = myFlag;
    if (myFlag === 1) { this.type = 'terrestre_cont'; this.nombre = 'Contenedor lleno - FCL'; }
    if (myFlag === 2) { this.type = 'terrestre_suelta'; this.nombre = 'Carga suelta - Mudanzas'; }
  }

  async onSubmit(form: NgForm) {
    const jsonVar = this.data.createJson(form, this.myFlag, this.type);
    console.log(JSON.stringify(jsonVar));
    this.apiService.createItem(jsonVar).subscribe((response) => {
      console.log(response);
    });
    const alert = await this.alertController.create({
      header: 'Exito!',
      message: 'Se envio su cotizacion con exito.',
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
