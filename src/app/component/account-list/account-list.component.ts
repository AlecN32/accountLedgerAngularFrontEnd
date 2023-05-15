import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/account';
import { AccountService } from 'src/app/service/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  accounts: Account[] = [];

  constructor(private accountService : AccountService, private router: Router) { }

  ngOnInit(): void {
    this.getaccounts();
  }

  private getaccounts(){
    this.accountService.getAccounts().subscribe(data => {
      this.accounts = data;
    },
    error => console.log(error));
  }

  accountDetails(id: number){
    this.router.navigate(['account-details', id]);
  }

  updateAccount(id: number){
    this.router.navigate(['update-account', id]);
  }

  viewAccountDetails(id: number){
    this.router.navigate(['account-details', id]);
  }


  deleteAccount(id: number){
    this.accountService.deleteAccount(id).subscribe( data => {
      this.getaccounts();
    },
    error => console.log(error));
  }
}


