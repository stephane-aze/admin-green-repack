import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  constructor(public utilisateurService: AuthService, public router: Router) { }
  ngOnInit(): void {
  }

  logout(){
    this.utilisateurService.logout();
    this.router.navigate(['']);
  }

}
