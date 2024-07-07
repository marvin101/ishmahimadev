import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BhajanPage } from './bhajan.page';

const routes: Routes = [
  {
    path: '',
    component: BhajanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BhajanPageRoutingModule {}
