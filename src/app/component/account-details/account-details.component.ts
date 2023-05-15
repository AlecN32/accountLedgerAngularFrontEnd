import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Account } from 'src/app/account';
import { AccountService } from 'src/app/service/account.service';
import { TransactionService } from 'src/app/service/transaction.service';
import { Transaction } from 'src/app/transaction';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  id : number = 0;
  account! : Account;
  transactions : Transaction[] = [];
  isLoad : boolean = false;
  transactionType : string = "";

  constructor(private route : ActivatedRoute, private accountService : AccountService,
    private tranactionService : TransactionService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getAccountByAccId();
    this.getTransactionstByAccId();
  }

  getAccountByAccId(){
    this.accountService.getAccountByAccId(this.id).subscribe(data => {
      this.account = data;
      this.isLoad = true;
    })
  }

  getTransactionstByAccId(){
    this.tranactionService.getTransactionsByAccID(this.id).subscribe(data => {
      this.transactions = data;
    },
    error => console.log(error));
  }

  deleteTransaction(id : number){
    this.tranactionService.deleteTransaction(id).subscribe(data => {
      this.getAccountByAccId();
      this.getTransactionstByAccId()
    },
    error => console.log(error));
  }

  public onOpenModal(mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addTransactionModal');
    }
    container?.appendChild(button);
    button.click();
  }

  public onAddTransaction(addForm: NgForm): void {
    let transaction = addForm.value;
    document.getElementById('add-transaction-form')?.click();
    this.tranactionService.createTransaction(addForm.value).subscribe(
      (response: Transaction) => {
        console.log(response);
        this.getAccountByAccId();
        this.getTransactionstByAccId()
        addForm.reset();
      },
      error => console.log(error));
  }


}
