import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DailyPrayerPage } from './daily-prayer.page';

const routes: Routes = [
  {
    path: '',
    component: DailyPrayerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DailyPrayerPageRoutingModule {}
