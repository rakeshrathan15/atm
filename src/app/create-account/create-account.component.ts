import { Component } from '@angular/core';
import { Account } from '../models/Account';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent {
  account: Account = {};

  constructor(private accountService: AccountService) { }

  createAccount() {
    this.accountService.createAccount(this.account).subscribe(
      response => {
        console.log('Account created:', response);
        alert('Account created successfully!');
      },
      error => {
        console.error('Error creating account:', error);
        alert('Failed to create account.');
      }
    );
  }
}
