import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';
import { ImagePickerComponent } from './image-picker.component';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [ImagePickerComponent],
  exports: [ImagePickerComponent]
})
export class ImagePickerModule {}
