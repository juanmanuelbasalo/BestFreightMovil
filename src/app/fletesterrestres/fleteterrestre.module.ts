import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FleteterrestrePage } from './fleteterrestre.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: FleteterrestrePage
      }
    ]),
    TranslateModule.forChild(),
  ],
  declarations: [FleteterrestrePage]
})
export class FleteterrestreModule {}
