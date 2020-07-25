import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
    path: 'list', loadChildren: () =>
      import('./list/list.module').then(m => m.ListModule)
  },
  {
    path: 'form', loadChildren: () =>
      import('./form/form.module').then(m => m.FormModule)
  },
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
