import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListHomeComponent } from './list-home/list-home.component';
import { SharedModule } from "../shared/shared.module";
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [ListHomeComponent, TableComponent],
  imports: [
    CommonModule,
    ListRoutingModule,
    SharedModule
  ],
  exports: []
})
export class ListModule { }
