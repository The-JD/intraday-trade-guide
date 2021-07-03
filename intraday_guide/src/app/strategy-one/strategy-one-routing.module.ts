import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StrategyOnePage } from './strategy-one.page';

const routes: Routes = [
  {
    path: '',
    component: StrategyOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StrategyOnePageRoutingModule {}
