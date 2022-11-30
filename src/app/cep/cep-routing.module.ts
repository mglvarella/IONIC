import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CEPPage } from './cep.page';

const routes: Routes = [
  {
    path: '',
    component: CEPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CEPPageRoutingModule {}
