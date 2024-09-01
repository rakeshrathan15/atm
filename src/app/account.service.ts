import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account } from './models/Account';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  createAccount(account: Account): Observable<Account> {
    return this.http.post<Account>(`${this.apiUrl}/createAccount`, account);
  }
}
