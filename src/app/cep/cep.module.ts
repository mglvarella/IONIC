import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CEPPageRoutingModule } from './cep-routing.module';

import { CEPPage } from './cep.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CEPPageRoutingModule
  ],
  declarations: [CEPPage]
})
export class CEPPageModule {}
