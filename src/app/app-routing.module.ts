import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprasComponent } from './view/compras/compras.component';

const APP_ROUTES: Routes = [
   { path: 'compras', component: ComprasComponent},
   { path: '**', pathMatch: 'full', redirectTo: 'compras'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true})
