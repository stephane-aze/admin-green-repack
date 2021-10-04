import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth/auth.service';

const API_URL = environment.API_URL;
@Injectable({
  providedIn: 'root'
})
export class UserService {
  token:any;
  constructor(private http: HttpClient,private utilisateurService: AuthService) { }


  getUsers() {
    this.token = this.utilisateurService.currentUserValue.token;
    let httpHeader = new HttpHeaders().set('auth-token',this.token!);
    return this.http.get(`${API_URL}/users/users_not_valid`);
  }
  validateUser(id) {
    this.token = this.utilisateurService.currentUserValue.token;
    let httpHeader = new HttpHeaders().set('auth-token',this.token!);

    return this.http.put(`${API_URL}/users/validate/${id}`,{},{headers: httpHeader});
  }
}
