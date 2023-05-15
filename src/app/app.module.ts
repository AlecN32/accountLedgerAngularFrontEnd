import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountListComponent } from './component/account-list/account-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { CreateAccountComponent } from './component/create-account/create-account.component';
import { UpdateAccountComponent } from './component/update-account/update-account.component';
import { AccountDetailsComponent } from './component/account-details/account-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountListComponent, 
    CreateAccountComponent,
    UpdateAccountComponent,
    AccountDetailsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
