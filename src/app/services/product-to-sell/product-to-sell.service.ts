import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category, ItemState } from 'src/app/models/Category';
import { environment} from 'src/environments/environment';
import { Observable } from 'rxjs';

const API_URL=environment.API_URL
@Injectable({
  providedIn: 'root'
})
export class ProductToSellService {
  constructor(private http: HttpClient) {}
  itemStates: ItemState[] = [
    {value: '0', viewValue: 'Etat neuf'},
    {value: '1', viewValue: 'Très bon état'},
    {value: '2', viewValue: 'Bon état'},
    {value: '3', viewValue: 'Etat satisfaisant'},
    {value: '4', viewValue: 'En état'},

  ]

  getStates(): ItemState[]{
    return this.itemStates;
  }
  getCategories(): Observable<Category[]>{
    
    return this.http.get<Category[]>(`${API_URL}/api/category`);
  }
}

