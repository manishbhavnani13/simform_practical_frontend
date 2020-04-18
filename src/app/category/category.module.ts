import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { CommonsModule} from './../common/common.module';
import {CategoryService} from './category.service';
import { CategoryListComponent } from './category-list/category-list.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; //importing the module
import { Ng2OrderModule } from 'ng2-order-pipe'; //importing the module
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

@NgModule({
  declarations: [CategoryComponent, CategoryListComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    CommonsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule
  ],
  providers : [CategoryService]
})
export class AuthModule { }
