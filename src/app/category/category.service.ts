import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import { JwtHelperService } from '@auth0/angular-jwt';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import { CookieService } from '@ngx-toolkit/cookie';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient , private jwtHelper: JwtHelperService , private router: Router ,   private cookieService: CookieService ) { }

  categoryAdd(data?: any): Observable<HttpResponse<any>> {
    return this.http.post(environment.host + 'category/add', data,
      {observe: 'response'});
  }


  categoryEdit(data?: any): Observable<HttpResponse<any>> {
    return this.http.post(environment.host + 'category/update', data,
      {observe: 'response'});
  }

  categoryList(data?: any): Observable<HttpResponse<any>> {
    return this.http.post(environment.host + 'category/list', data,
      {observe: 'response'});
  }


}
