import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FleteaereoPage } from './fleteaereo.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: FleteaereoPage
      }
    ]),
    TranslateModule.forChild(),
  ],
  declarations: [FleteaereoPage]
})
export class FleteaereoPageModule {}
