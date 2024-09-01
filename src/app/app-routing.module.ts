import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateAtmComponent } from './create-atm/create-atm.component';

const routes: Routes = [
  { path: '', redirectTo: '/create-account', pathMatch: 'full' }, // Redirect to create-account as default
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'create-atm', component: CreateAtmComponent },
  // Add more routes here if necessary
  { path: '**', redirectTo: '/create-account' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
