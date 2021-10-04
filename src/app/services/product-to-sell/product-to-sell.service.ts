import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category, ItemState } from 'src/app/models/Category';
import { environment} from 'src/environments/environment';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

const API_URL=environment.API_URL
@Injectable({
  providedIn: 'root'
})
export class ProductToSellService {
  token:any;
  constructor(private http: HttpClient,private utilisateurService: AuthService) {}
  itemStates: ItemState[] = [
    {value: 'Etat neuf', viewValue: 'Etat neuf'},
    {value: 'Très bon état', viewValue: 'Très bon état'},
    {value: 'Bon état', viewValue: 'Bon état'},
    {value: 'Etat satisfaisant', viewValue: 'Etat satisfaisant'},
    {value: 'En état', viewValue: 'En état'},

  ]

  getStates(): ItemState[]{
    return this.itemStates;
  }
  getCategories(): Observable<Category[]>{
    this.token = this.utilisateurService.currentUserValue.token;
    let httpHeader = new HttpHeaders().set('auth-token',this.token!);

    return this.http.get<Category[]>(`${API_URL}/api/category`,{headers: httpHeader});
  }
}

