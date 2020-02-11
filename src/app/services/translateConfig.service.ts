import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateConfigService {
  private language: string;
  constructor(private translate: TranslateService) { }
 
  getDefaultLanguage(){
    const language = this.translate.getBrowserLang();
    this.translate.setDefaultLang(language);
    return language;
  }
 
  setLanguage(setLang) {
    this.translate.use(setLang);
    this.language = setLang;
  }

  getCurrentLanguage(): string {
    return this.language;
  }
}
