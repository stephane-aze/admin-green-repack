import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Auth } from 'src/app/models/Auth';
import { User } from 'src/app/models/User';
import { environment } from 'src/environments/environment';

const API_URL = environment.API_URL;
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  private nullUser = new Auth(null);
  private currentUserSubject?: BehaviorSubject<Auth>;
  public currentUser?: Observable<Auth>;

  token?: string = "";

  constructor(private httpClient: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<Auth>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Auth {
    return this.currentUserSubject!.value;
  }

  logout(){
    sessionStorage.removeItem('currentUser');
    this.currentUserSubject?.next(this.nullUser);
  }

  public createUser(user: Auth){
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUserSubject?.next(user);
  }

  public getUser(): Observable<Auth> {
    return this.httpClient.get('/').pipe(map(response => {
      return new Auth(response);
    }))
  }

  public get isLoggedIn(){
    if(sessionStorage.getItem('currentUser')) return true;
    else return false;
  }

  login(param : any): Observable<any>{
    return this.httpClient.post<any>(API_URL + '/api/auth/login_admin',param);
  }

}
