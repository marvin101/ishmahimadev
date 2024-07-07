import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BhajanPageRoutingModule } from './bhajan-routing.module';

import { BhajanPage } from './bhajan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BhajanPageRoutingModule
  ],
  declarations: [BhajanPage]
})
export class BhajanPageModule {}
