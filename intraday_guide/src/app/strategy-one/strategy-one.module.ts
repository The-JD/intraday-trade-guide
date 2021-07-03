import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StrategyOnePageRoutingModule } from './strategy-one-routing.module';

import { StrategyOnePage } from './strategy-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StrategyOnePageRoutingModule
  ],
  declarations: [StrategyOnePage]
})
export class StrategyOnePageModule {}
