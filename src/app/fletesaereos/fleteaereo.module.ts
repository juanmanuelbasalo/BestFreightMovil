import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FleteaereoPage } from './fleteaereo.page';
import { TranslateModule } from '@ngx-translate/core';
import { ImagePickerModule } from '../image-picker/image-picker.module';

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
    ImagePickerModule,
  ],
  declarations: [FleteaereoPage]
})
export class FleteaereoPageModule {}
