import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/Product';

const API_URL = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) {}
  createPayment(stripeToken,amount){
    const cart = {
      stripeToken,
      amount
    }
    return this.http.post(`${API_URL}/`, cart);

  }
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${API_URL}/api/product`);
  }
  
}
