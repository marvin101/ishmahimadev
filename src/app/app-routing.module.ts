import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./app.module').then(m => m.AppModule)
  }, 
  {
    path: 'daily-prayer',
    loadChildren: () => import('./daily-prayer/daily-prayer.module').then(m => m.DailyPrayerPageModule)
  }, 
  {
    path: 'mass',
    loadChildren: () => import('./mass/mass.module').then(m => m.MassPageModule)
  }, 
  {
    path: 'bhajan',
    loadChildren: () => import('./bhajan/bhajan.module').then(m => m.BhajanPageModule)
  }, 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
