import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from '../account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private apiServerUrl = 'http://localhost:8080/account';
  // private apiServerUrl = window.location.protocol +'/account';

  constructor(private http : HttpClient) { }

  public getAccounts(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/all`);
  }

  public getAccountByAccId(accountID: number): Observable<Account> {
    return this.http.get<Account>(`${this.apiServerUrl}/${accountID}`);
  }


  public getAccountByAccNum(accountNumber: number): Observable<Account> {
    return this.http.get<Account>(`${this.apiServerUrl}/account-number/${accountNumber}`);
  }


  public createAccount(account: Account): Observable<Account> {
    return this.http.post<Account>(`${this.apiServerUrl}/create-account`, account);
  }

  public updateAccount(account: Account): Observable<Account> {
    return this.http.put<Account>(`${this.apiServerUrl}/update-account`, account);
  }

  public deleteAccount(accountNumber: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/delete-account/${accountNumber}`);
  }

}
