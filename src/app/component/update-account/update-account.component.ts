import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/service/account.service';
import { Account } from 'src/app/account';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.css']
})
export class UpdateAccountComponent implements OnInit {

  account!: Account;
  id : number = 0;
  isLoad : boolean = false;

  constructor(private accountService : AccountService ,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getAccountById(this.id);  
  }

  onSubmit(){
    this.updateAccount(this.account);
  }

  private getAccountById(id : number){
    this.accountService.getAccountByAccId(id).subscribe(data => {
      this.account = data;
      this.isLoad = true;
    },
    error => console.log(error));
  }

  private updateAccount(account : Account){
    this.accountService.updateAccount(account).subscribe(data => {
      this.account = data;
      this.goToAccountList()
    },
    error => console.log(error));
  }

  goToAccountList() {
    this.router.navigate(['/accounts'])
  }

}
