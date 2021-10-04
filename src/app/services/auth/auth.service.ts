import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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
  private nullUser = new User(null);
  private currentUserSubject?: BehaviorSubject<User>;
  public currentUser?: Observable<User>;

  token?: string = "";

  constructor(private httpClient: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject!.value;
  }

  logout(){
    sessionStorage.removeItem('currentUser');
    this.currentUserSubject?.next(this.nullUser);
  }

  public createUser(user: User){
    sessionStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUserSubject?.next(user);
  }

  public updateUser(updatedUser: any){
    this.token = this.currentUserValue.accessToken;
    let httpHeader = new HttpHeaders().set('x-access-token',this.token!);
    return this.httpClient.put<any>(API_URL + '/user/edit/' + updatedUser.id,updatedUser, {headers: httpHeader});
  }

  public getUpdatedUser(){
    return this.httpClient.get<any>(API_URL + '/user/' + this.currentUserValue.id);
  }

  public getUser(): Observable<User> {
    return this.httpClient.get('/').pipe(map(response => {
      return new User(response);
    }))
  }

  public get isLoggedIn(){
    if(sessionStorage.getItem('currentUser')) return true;
    else return false;
  }

  login(param : any): Observable<any>{
    return this.httpClient.post<any>(API_URL + '/api/login_admin',param);
  }

}
