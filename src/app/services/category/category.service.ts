import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/Category';
import { AuthService } from '../auth/auth.service';

const API_URL = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  token:any;
  constructor(private http: HttpClient,private utilisateurService: AuthService) {}

  getCategories(): Observable<Category[]> {
    this.token = this.utilisateurService.currentUserValue.token;
    let httpHeader = new HttpHeaders().set('auth-token',this.token!);

    return this.http.get<Category[]>(`${API_URL}/api/category`,{headers: httpHeader});
  }
  createCategory(category:any) {
    this.token = this.utilisateurService.currentUserValue.token;
    let httpHeader = new HttpHeaders().set('auth-token',this.token!);

    return this.http.post(`${API_URL}/api/category/create`,category,{headers: httpHeader});
  }

}
