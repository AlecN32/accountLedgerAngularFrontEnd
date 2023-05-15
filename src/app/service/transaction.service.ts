import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from '../transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http : HttpClient) { }

  private apiServerUrl = 'http://localhost:8080/transaction';

  public getTransactions(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/all`);
  }


  public getTransactionsByAccID(accountID: number): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.apiServerUrl}/get-transactions-by-account/${accountID}`);
  }


  public createTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(`${this.apiServerUrl}/create-transaction`, transaction);
  }

  public updateTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.put<Transaction>(`${this.apiServerUrl}/update-transaction`, transaction);
  }

  public deleteTransaction(transactionID: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/delete-transaction/${transactionID}`);
  }
}
