import { Component } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cotizaciones = '';
  pais = '';
  paises: any;
  horizontalText: string;

  disableBtn: boolean;
  constructor(private splashScreen: SplashScreen, public apiService: ApiService) {
    this.splashScreen.show();
    this.disableBtn = true;
    this.paises = [];
    apiService.getList().subscribe((response) => {
      this.cotizaciones = response.cant_cotizaciones;
    });
    this.getAllCountries();
    this.horizontalText = this.getMarqueeText();
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

  private getMarqueeText(): string {
    return `Sea Cargo Freight -
     Air Cargo Freight -
     Land Cargo Freight -
     Sea Loose Cargo Freight -
     Cargo Insurance -
     Custom Clearance -
     Cargo Inspection -
     Land Transport -
     Bonded Warehouse`;
  }
}