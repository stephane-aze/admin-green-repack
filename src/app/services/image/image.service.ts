import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
const API_URL =environment.API_URL
@Injectable({
  providedIn: 'root'
})

export class ImageService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  token: string ;

  constructor(private httpClient: HttpClient, private utilisateurService: AuthService) {
    let httpHeader = new HttpHeaders().set('x-access-token',this.token!);
  }

  upload(param:any){
    this.token = this.utilisateurService.currentUserValue.accessToken;
    let httpHeader = new HttpHeaders().set('x-access-token',this.token!);
    return this.httpClient.post<any>(API_URL + '/api/merchant/photos/upload',param/*,{headers: httpHeader}*/);
    return this.httpClient.post<any>(API_URL + '/auth/collaborateur',param,{headers: httpHeader});
  }
}
