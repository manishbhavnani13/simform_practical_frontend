import { Component, OnInit, Renderer2, OnDestroy, Injector } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { SignUpUserServiceService } from './sign-up-user-service.service';
import { UserModel } from './sign-up-user-model';
import { FormArray, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { patternValidator } from '../../_shared/pattern.validator';
import { environment } from '../../../environments/environment';
import { CookieService } from '@ngx-toolkit/cookie';
import { ToastrService } from 'ngx-toastr';
import { UserProfileService } from '../user-profile.service';
import { CommonService } from 'src/app/common/common.service';
@Component({
  selector: 'app-sign-up-user',
  templateUrl: './sign-up-user.component.html',
  styleUrls: ['./sign-up-user.component.scss']
})
export class SignUpUserSComponent implements OnInit, OnDestroy {
  // tslint:disable-next-line: ban-types
  public userForm: FormGroup;
  public signUpState: any = 1;
  public isFormValid = true;
  public loader: any = false;
  public isAlready: boolean;
  constructor(
    private renderer: Renderer2,
    private signUserService: SignUpUserServiceService,
    private fb: FormBuilder,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router,
    private toaster: ToastrService,
    private cookieService: CookieService,
    private injector: Injector
  ) { window.scrollTo(0, 0);
    this.scrollTop();
    this.renderer.addClass(document.body, 'signup-sign-up-user');
    this.cookieService.removeItem('_dtl');
    localStorage.removeItem('user');
  }
 

  ngOnInit() {
    window.scrollTo(0, 0);
    this.scrollTop();
    this.userForm = this.fb.group({
      email: [null, [Validators.required, patternValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      password: [null, [Validators.required, patternValidator(/^^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/)]],
      cpassword: [null, [Validators.required, patternValidator(/^^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/)]],
      fname: [null, [Validators.required]],
      lname: [null, [Validators.required]],
 
    }, { validator: this.passwordConfirming });
  }

  public scrollTop() {
    let top = document.getElementById('top');
    if (top !== null) {
      top.scrollIntoView();
      top = null;
    }
      }
  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'signup-sign-up-user');
  }

  public checkSignupState(state) {
    this.signUpState = state;
  }

  public userRegisteration() {
    if (this.userForm.valid) {
      const toaster = this.injector.get(ToastrService);
      const params = {
        email: this.userForm.get('email').value,
        password: this.userForm.get('cpassword').value,
        firstName :this.userForm.get('fname').value,
        lastName : this.userForm.get('lname').value
      };
      this.loader = true;
      this.signUserService
        .registerUser(params)
        .subscribe((data: any) => {
          this.loader = false;
          if (data.body.success === true) {
            const toaster = this.injector.get(ToastrService);
            toaster.error('Register Successful', 'Success', {
              timeOut: 3000
            });
            this.router.navigate(['/auth']);
          } else {
            if (data.body.isAvailable) {
              const toaster = this.injector.get(ToastrService);
              toaster.success('Email Already Registerd', 'Success', {
                timeOut: 3000
              });
            } else {
              toaster.error(data.body.message, 'Error', {
                timeOut: 3000
              });
            }

          }
        }, (error) => {
          this.loader = false;
          toaster.error('something went wrong', 'Error', {
            timeOut: 3000
          });
        });
    } else {
      this.isFormValid = false;
    }

  }


  passwordConfirming(c: AbstractControl): { invalid: boolean } {
    if (c.get('password').value !== c.get('cpassword').value) {
      return { invalid: true };
    }
  }


}
