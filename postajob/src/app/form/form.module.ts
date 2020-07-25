import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { FormRoutingModule } from './form-routing.module';
import { FormHomeComponent } from './form-home/form-home.component';
import { SharedModule } from "../shared/shared.module";
// import { DataService } from './data.service';
import { HttpClient, HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [FormHomeComponent],
  imports: [
    CommonModule,
    FormRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    // DataService
  ],
  exports: []
})
export class FormModule { }
