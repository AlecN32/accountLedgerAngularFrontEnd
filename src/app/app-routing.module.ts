import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountListComponent } from './component/account-list/account-list.component'; 
import { CreateAccountComponent } from './component/create-account/create-account.component';
import { UpdateAccountComponent } from './component/update-account/update-account.component';
import { AccountDetailsComponent } from './component/account-details/account-details.component';

const routes: Routes = [
  {path: 'accounts', component: AccountListComponent},
  {path: 'create-account', component: CreateAccountComponent},
  {path: '', redirectTo: 'accounts', pathMatch: 'full'},
  {path: 'update-account/:id', component: UpdateAccountComponent},
  {path: 'account-details/:id', component: AccountDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
