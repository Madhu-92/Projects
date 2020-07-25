import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormHomeComponent } from "./form-home/form-home.component";

const routes: Routes = [
  {path: '', component: FormHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
