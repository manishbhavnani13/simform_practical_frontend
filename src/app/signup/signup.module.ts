import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import { SignupRoutingModule } from './signup-routing.module';
import { SignUpUserSComponent } from './sign-up-user/sign-up-user.component';
import { CommonsModule} from '../common/common.module';
import { SignUpUserServiceService} from './sign-up-user/sign-up-user-service.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { MatDatepickerModule,  MatNativeDateModule,
  MatFormFieldModule,
  MatInputModule  } from '@angular/material';


@NgModule({
  declarations: [ SignUpUserSComponent],
  imports: [
    CommonModule,
    SignupRoutingModule,
    CommonsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    NgbModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule
  ] ,
  providers : [SignUpUserServiceService],
  exports : [SignUpUserSComponent]
})
export class SignupModule { }
