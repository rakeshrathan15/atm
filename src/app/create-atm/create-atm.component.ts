import { Component } from '@angular/core';
import { Account } from '../models/Account';
import { Atm } from '../models/Atm';
import { AtmService } from '../atm.service';

@Component({
  selector: 'app-create-atm',
  templateUrl: './create-atm.component.html',
  styleUrl: './create-atm.component.css'
})
export class CreateAtmComponent {

  account: Account = {};
  atm: Atm = {};

  constructor(private atmService: AtmService) { }

  createAtm() {
    this.atmService.createAtm(this.account).subscribe(
      response => {
        this.atm = response;
        console.log('ATM created:', this.atm);
        alert('ATM created successfully!');
      },
      error => {
        console.error('Error creating ATM:', error);
        alert('Failed to create ATM.');
      }
    );
  }

}
