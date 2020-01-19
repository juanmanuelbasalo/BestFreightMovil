import { Component } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { ApiService } from '../services/api.service';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cotizaciones = '';
  pais = '';
  paises: any;

  disableBtn: boolean;
  constructor(private splashScreen: SplashScreen, public apiService: ApiService) {
    this.splashScreen.show();
    this.disableBtn = true;
    this.paises = [];
    apiService.getList().subscribe((response) => {
      this.cotizaciones = response.cant_cotizaciones;
    });
    this.getAllCountries();
  }

  func(gend) {
    if (gend != null || gend !== '')
    {
      this.disableBtn = false;
    }
  }

  getAllCountries() {
    this.apiService.getListCountries().subscribe(response => {
      this.paises = response;
    });
  }
}
