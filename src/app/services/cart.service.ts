import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../models/Product';

const API_URL = environment.API_URL;
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }
  items: number=0;
/* . . . */

  /*addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }*/
  addToCart(payload) {
    return this.http.post(`https://fake-api-green-repack.free.beeceptor.com/cart`, payload);
  }
  getCartItems() {
    return this.http.get(`https://fake-api-green-repack.free.beeceptor.com/cart`);
  }
  increaseQty(payload) {
    return this.http.post(`https://fake-api-green-repack.free.beeceptor.com/cart`, payload);
  }
  decreaseQty(payload) {
    return this.http.post(`https://fake-api-green-repack.free.beeceptor.com/cart`, payload);
  }
  emptyCart() {
    return this.http.delete(`https://fake-api-green-repack.free.beeceptor.com/cart/empty-cart`);
  }
}
