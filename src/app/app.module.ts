import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateConfigService } from './services/translateConfig.service';

export function LanguageLoader(http: HttpClient) {
   return new TranslateHttpLoader(http, './assets/', '.json');
 }

@NgModule({
   declarations: [
      AppComponent
   ],
   entryComponents: [],
   imports: [
      BrowserModule,
      IonicModule.forRoot(),
      AppRoutingModule,
      HttpClientModule,
      TranslateModule.forRoot({
         loader: {
           provide: TranslateLoader,
           useFactory: (LanguageLoader),
           deps: [HttpClient]
         }
       }),
   ],
   providers: [
      StatusBar,
      SplashScreen,
      TranslateConfigService,
      { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
   ],
   bootstrap: [
      AppComponent
   ]
})

export class AppModule {}
