import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DailyPrayerPageRoutingModule } from './daily-prayer-routing.module';

import { DailyPrayerPage } from './daily-prayer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DailyPrayerPageRoutingModule
  ],
  declarations: [DailyPrayerPage]
})
export class DailyPrayerPageModule {}
