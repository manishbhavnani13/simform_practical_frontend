// Angular Imports
import { Component, OnInit, Renderer2, OnDestroy, Injector } from '@angular/core';
import { MatSpinner } from '@angular/material';
import { HttpResponse } from '@angular/common/http';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

// Own Imports
import { CategoryService } from './category.service';
import { patternValidator } from '../_shared/pattern.validator';
import { environment } from '../../environments/environment';
import { CookieService } from '@ngx-toolkit/cookie';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  categoryForm: FormGroup;
  isEdit: boolean = false;
  constructor(
    private fb: FormBuilder,
    private injector: Injector,
    private categoryService: CategoryService,
    private router: Router) {
    this.categoryForm = this.fb.group({
      name: ['', Validators.required],
      title: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(1000)])],
    });
  }

  ngOnInit() {
    if (this.router) {

      let checkEdit = this.router.url.split('/')[2]
      if (checkEdit === 'edit') {
        this.isEdit = true;
        const params = {
          'category': this.router.url.split('/')[3]
        }
        this.categoryService.categoryList(params).subscribe(result => {
          let categoryData = result['body']['data']['data'][0]
          this.categoryForm.get("name").setValue(categoryData.category_name);
          this.categoryForm.get("title").setValue(categoryData.category_title);
        });
      }
    }
  }

  saveProduct(values) {

    const params = {
      'category_name': values.name,
      'category_title': values.title
    }

    let checkEdit = this.router.url.split('/')[2]
    let servicepath = '';
    if (checkEdit === 'edit') {
      params['category'] = this.router.url.split('/')[3];
      this.categoryService.categoryEdit(params).subscribe(result => {
        if (result['body']['data']['status'] === 200) {
          const toaster = this.injector.get(ToastrService);
          toaster.success('Category  updated', 'Success', {
            timeOut: 3000
          });

          this.router.navigate(['category/list'])
        } else {
          const toaster = this.injector.get(ToastrService);
          toaster.error('Category not updated', 'Error', {
            timeOut: 3000
          });

        }
      }, (err) => {
        const toaster = this.injector.get(ToastrService);
        toaster.error('Category not updated', 'Error', {
          timeOut: 3000
        });
      });
    } else {
      this.categoryService.categoryAdd(params).subscribe(result => {
        if (result['body']['data']['status'] === 200) {
          const toaster = this.injector.get(ToastrService);
          toaster.success('Category Added', 'Success', {
            timeOut: 3000
          });


          this.router.navigate(['category/list'])
        } else {
          const toaster = this.injector.get(ToastrService);
          toaster.error('Category not updated', 'Error', {
            timeOut: 3000
          });
        }
      });
    }

  }




}




