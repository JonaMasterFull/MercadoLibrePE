import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprasComponent } from './view/compras/compras.component';
import { AllguiasComponent } from './view/allguias/allguias.component';

const APP_ROUTES: Routes = [
   { path: 'compras', component: ComprasComponent},
   { path: 'allguia', component: AllguiasComponent},
   { path: '**', redirectTo: 'compras',pathMatch: 'full'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true})
