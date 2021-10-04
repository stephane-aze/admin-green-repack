import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const API_URL = environment.API_URL;
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  getUsers() {
    return this.http.get(`${API_URL}/users/users_not_valid`);
  }
  validateUser(id) {
    return this.http.put(`${API_URL}/users/validate/${id}`,{});
  }
}
