import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { ProductToSell } from 'src/app/models/ProductToSell';
import { Proposal } from 'src/app/models/Proposal';
const API_URL =environment.API_URL
@Injectable({
  providedIn: 'root'
})

export class SellerService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  token: string ;

  constructor(private httpClient: HttpClient, private utilisateurService: AuthService) {
    let httpHeader = new HttpHeaders().set('x-access-token',this.token!);
  }

  acceptToDeal(param:any){
    this.token = this.utilisateurService.currentUserValue.accessToken;
    let httpHeader = new HttpHeaders().set('x-access-token',this.token!);
    return this.httpClient.post<any>(API_URL + '/auth/collaborateur',param,{headers: httpHeader});
  }
  createProposal(param:any){
    this.token = this.utilisateurService.currentUserValue.accessToken;
    //let httpHeader = new HttpHeaders().set('x-access-token',this.token!);
    return this.httpClient.post<any>(API_URL + '/api/merchant/sell_product',param/*,{headers: httpHeader}*/);
  }
  getProducts():Observable<ProductToSell[]>{
    this.token = this.utilisateurService.currentUserValue.accessToken;
    //let httpHeader = new HttpHeaders().set('x-access-token',this.token!);
    return this.httpClient.get<any>(API_URL + '/api/merchant/requests_products'/*,{headers: httpHeader}*/);
  }
  getProposals(id:any): Observable<Proposal[]>{
    this.token = this.utilisateurService.currentUserValue.accessToken;
    //let httpHeader = new HttpHeaders().set('x-access-token',this.token!);
    console.log(id)
    return this.httpClient.get<any>(API_URL + `/api/merchant/proposals/${id}`/*,{headers: httpHeader}*/);


  }
}
