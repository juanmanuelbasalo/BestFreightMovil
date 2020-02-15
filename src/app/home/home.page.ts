import { Component } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { ApiService } from '../services/api.service';
import { TranslateConfigService } from '../services/translateConfig.service';

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
  horizontalTextCountry: string;
  selectedLanguage: string;

  disableBtn: boolean;
  constructor(private splashScreen: SplashScreen, public apiService: ApiService, 
              private translateConfigService: TranslateConfigService) {
    this.splashScreen.show();
    this.disableBtn = true;
    this.paises = [];
    apiService.getList().subscribe((response) => {
      this.cotizaciones = response.cant_cotizaciones;
    });
    this.getAllCountries();
    this.horizontalText = this.getMarqueeText();
    this.horizontalTextCountry = this.getMarqueeTextCountry();
    translateConfigService.setLanguage('en');
  }

  languageChanged(){
    this.translateConfigService.setLanguage(this.selectedLanguage);
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
     Bonded Warehouse - Sea Cargo Freight -
     Air Cargo Freight -
     Land Cargo Freight -
     Sea Loose Cargo Freight -
     Cargo Insurance -
     Custom Clearance -
     Cargo Inspection -
     Land Transport -
     Bonded Warehouse - Sea Cargo Freight -
     Air Cargo Freight -
     Land Cargo Freight -
     Sea Loose Cargo Freight -
     Cargo Insurance -
     Custom Clearance -
     Cargo Inspection -
     Land Transport -
     Bonded Warehouse`;
  }
  private getMarqueeTextCountry() {
    return `Alemania to Perú   
    Alemania to Panamá   
    Alemania to Jamaica   
    Alemania  to Republica Dominicana   
    Austria to peru   
    Barquisimeto to Ciudad de Panama    
    Belem to Panamá  
    Belgica  to Chile   
    Belgica  to Bolivia  
    Belice  to Chile   
    Bogotá to Panamá   
    Bolivia to India   
    Bolivia  to España   
    Brasil to Portugal   
    Brasil to Panamá   
    Brasil to India   
    Brasil  to Canada   
    Canada to Peru   
    Chile to España   
    Chile to China   
    China to Chile   China to Venezuela   China to Venezuela   China to Panamá   China to Panamá   China to Panamá   Ciudad de Panama  to Chennai   Colombia to Panamá   Colombia to Singapore   Colombia  to Panamá   Colombia  to España   Colombia  to Alemania   Colombia  to Haiti   Colón to Cartagena   Costa Rica to Mexico   Costa Rica to Irlanda   Costa Rica to Noruega   Darien - Panamá to Chennai   Darien - Panamá to Mulund- India   David-Chiriqui to Mangalore   Dinamarca to Honduras   Ecuador to Venezuela   Ecuador  to Taiwan   España to Colombia    España to Panamá   España to Chile   España to Zona Libre de Colon   Estados Unidos to Panamá   Estados Unidos to Panamá   Estados Unidos to Panamá   Estados Unidos to Panamá   Finlandia to Panamá   Guadalajara to Panama   Guatemla to Indonesia   Hamburgo to Panamá   Helsinki  to Panamá    Honduras to Perú   Honduras to Dinamarca   HONG KONG to COLÓN   Hong Kong  to Jamaica   India to Brasil   India to Bolivia   India to Panamá   Indonesia to Guatemala   Indonesia to Italia   Italia to Indonesia   Italia to Uruguay   Jamaica  to Reino Unido   Japon  to Colombia    MADRID to PANAMÁ   Mexico to Costa Rica   México to Panamá   México to Panamá   México DF to Panamá   Miami to David-Chiriqui   Miami to Alanje - Chiriqui   Miami  to Panamá    Mumbai to Alanje - Chiriqui   Paises Bajos to Bolivia    Panamá to mumbai   Panamá to Chenai   Panamá to Mundra   Panamá to Tuticorin   Panamá to Mangalore   Panamá to Japon   Panamá to Bogota    Panamá to India   Panamá to India   Panamá to Perú   Panamá to India   Panamá to India   Panamá to India   Panamá to Estados Unidos   Panamá to California   Panamá to Ecuador   Panamá to Guayaquil    Panamá to India   Panamá to India   Panamá to India   Panamá to India   Panamá to India   Panamá to Colombia   Panamá to Callao   Panamá to Tuticorin   Paraguay to China   Perú to Canada   Perú to Alemania   Perú to Japon   Perú to Taiwan   Perú to India   Portugal to Brasil   Puerto Rico  to Belgica   Quindao to Puerto cabello   Quindao to La guaira   Quindao to Colon free zone   "RANDLEMAN   NC to Colón"   Reino Unido to Venezuela   Reino Unido to Chile   Reino Unido  to Ecuador    Republica Dominicana  to Japon   Republica Dominicana  to España    Shanghai to Zona Libre de Colon   Taiwan to Colombia    Taiwan  to Colombia   Trinidad Tobago to Reino Unido   Uruguay to México   Venezuela to Reino Unido   Venezuela to Ecuador   Venezuela to Panamá   
    Venezuela  to España`
  }
}
