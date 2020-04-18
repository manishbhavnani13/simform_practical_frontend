import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CommonsModule} from '../common/common.module';

import { DashboaredRoutingModule } from './dashboared-routing.module';
import { DashboaredComponent } from './dashboared.component';

import { UserDashboaredComponent } from './user-dashboared/user-dashboared.component';
import {AuthGuardService} from '../_guard/auth.guard';
import {DashboardService} from './dashboared.service';
import { ScrollingModule } from '@angular/cdk/scrolling';


@NgModule({
  declarations: [DashboaredComponent, UserDashboaredComponent],
  imports: [
    CommonModule,
    CommonsModule,
    DashboaredRoutingModule,
    ScrollingModule,
  ] ,
  providers : [AuthGuardService , DashboardService]
})
export class DashboaredModule { }
