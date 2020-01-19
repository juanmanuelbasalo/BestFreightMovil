import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FleteterrestrePage } from './fleteterrestre.page';

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
    ])
  ],
  declarations: [FleteterrestrePage]
})
export class FleteterrestreModule {}
