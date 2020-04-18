import { NgModule } from '@angular/core';
import { CommonRoutingModule } from './common-routing.module';
import { CommonComponent } from './common.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { PreLoginHeaderComponent } from './pre-login-header/pre-login-header.component';
import { MatDialogModule } from '@angular/material/dialog';
import { LoaderComponent } from './loader/loader.component';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { simformLoaderComponent } from './simform-loader/simform-loader.component';
import { CommonService } from './common.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfiromPopupComponent } from './confirom-popup/confirom-popup.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import { MatInputModule } from '@angular/material';
import { LoginFooterComponent } from './login-footer/login-footer.component';
@NgModule({
  declarations: [CommonComponent, HeaderComponent, FooterComponent, PreLoginHeaderComponent, LoaderComponent, simformLoaderComponent, ConfiromPopupComponent, SidebarComponent, LoginFooterComponent],
  imports: [
    CommonModule,
    CommonRoutingModule,
    MatDialogModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSlideToggleModule
  ],
  providers: [CommonService],
  exports: [HeaderComponent, FooterComponent, LoginFooterComponent, PreLoginHeaderComponent, LoaderComponent, simformLoaderComponent,ConfiromPopupComponent, SidebarComponent],
  entryComponents: [
    ConfiromPopupComponent,
    SidebarComponent,
  ]
})
export class CommonsModule { }
