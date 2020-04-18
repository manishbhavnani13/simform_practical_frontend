import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService} from '../_guard/auth.guard';
import { CategoryComponent } from './category.component';
import { CategoryListComponent } from './category-list/category-list.component';
const routes: Routes = [{ path: 'add', component: CategoryComponent ,  canActivate: [AuthGuardService] },
{ path: 'edit/:id', component: CategoryComponent ,  canActivate: [AuthGuardService] },
{ path: 'list', component: CategoryListComponent ,  canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
