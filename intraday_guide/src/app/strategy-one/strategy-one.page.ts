import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-strategy-one',
  templateUrl: './strategy-one.page.html',
  styleUrls: ['./strategy-one.page.scss'],
})
export class StrategyOnePage implements OnInit {
  niftyValue: number;
  isValidStrategy: boolean;
  callAction: string;
  stockValue: number;
  exitValue: number;
  stopLossValue: number;
  gainPercentage = 0.5;

  constructor() { }

  ngOnInit() {
  }

  getNiftyValue() {
    if (this.niftyValue < -1 || this.niftyValue > 1) {
      this.isValidStrategy = false;
    } else {
      this.isValidStrategy = true;
      if (this.niftyValue > 0 && this.niftyValue <= 1) {
        this.callAction = 'BUY';
      } else if (this.niftyValue <= 0 && this.niftyValue >= -1) {
        this.callAction = 'SELL';
      }
    }
  }

  calculateExitValues() {
    if (this.stockValue) {
      const percentageValue = (this.stockValue) * (this.gainPercentage / 100);
      if (this.callAction === 'BUY') {
        this.exitValue = this.stockValue + percentageValue;
        this.stopLossValue = (this.stockValue - percentageValue) - 1;
      } else if (this.callAction === 'SELL') {
        this.exitValue = this.stockValue - percentageValue;
        this.stopLossValue = (this.stockValue + percentageValue) + 1;
      }
    }

  }


}
