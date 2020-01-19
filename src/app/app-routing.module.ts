import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

/*
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
]; */
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'fletes', loadChildren: './fletes/fletes.module#FletesPageModule' },
  { path: 'fletemar', loadChildren: './fletesmaritimos/fletemar.module#FletemarPageModule' },
  { path: 'fleteaereo', loadChildren: './fletesaereos/fleteaereo.module#FleteaereoPageModule' },
  { path: 'fletesterrestre', loadChildren: './fletesterrestres/fleteterrestre.module#FleteterrestreModule' }
];/*
const routes: Routes = [
  { path: '', redirectTo: 'fletemar', pathMatch: 'full' },
  { path: 'fletemar', loadChildren: './fletesmaritimos/fletemar.module#FletemarPageModule' },
];*/
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
