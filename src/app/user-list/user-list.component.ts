import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { AdminService } from '../services/admin/admin.service';
import { DataLoaderService } from '../shared/data-loader.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  providers: [DataLoaderService]
})
export class UserListComponent implements OnInit {
  users$: Observable<User[]>;
  errorMessage: string;
  constructor(private router: Router,private associationService: AdminService, private dataLoader: DataLoaderService<User[]>) { }
  ngOnInit(): void {

    this.initProductsLoader()
  }
  private initProductsLoader(): void {
    const bars$ = this._getUsers();
    this.dataLoader.init(bars$);
    this.users$ = this.dataLoader.stream$;
  }
  private _getUsers(): Observable<User[]>{

    return this.associationService.getUsers()
  };
  validateUser(userId){
    this.associationService.validateUser(userId).subscribe(
      user => {
        console.log(user)
        const bars$ = this._getUsers();
        this.dataLoader.init(bars$);

      },
      error =>{
      //this.alertService.showNotification('Erreur sur la requete au serveur', 'OK', 'error');
      this.errorMessage = 'Erreur sur la requete au serveur';
      //return null;
      }
    );/**/
  }

}
