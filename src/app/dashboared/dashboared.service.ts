import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';

import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  
  constructor(private http: HttpClient) { }

}