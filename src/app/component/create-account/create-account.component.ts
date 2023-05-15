import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from 'src/app/account';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  account!: Account;

  constructor(private accountService: AccountService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(addForm: NgForm) {
    console.log(addForm.value);
    this.accountService.createAccount(addForm.value).subscribe(data => {
      console.log(data);
      this.goToAccountList();
    },
      error => console.log(error));
  }

  goToAccountList() {
    this.router.navigate(['/accounts'])
  }

}
