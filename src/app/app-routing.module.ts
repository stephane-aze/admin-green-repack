import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CategoryCreateComponent } from './category-create/category-create.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { ProposalCreateComponent } from './proposal-create/proposal-create.component';
import { ProposalListComponent } from './proposal-list/proposal-list.component';
import { UserListComponent } from './user-list/user-list.component';


const routes: Routes = [
  {path:"dashboard",component: DashboardComponent,canActivate: [AuthGuard]},
  {path:"users",component: UserListComponent,canActivate: [AuthGuard]},
  {path:"categories",component: CategoryListComponent,canActivate: [AuthGuard]},
  {path:"create_category", component: CategoryCreateComponent,canActivate: [AuthGuard]},
  {path:"proposals", component: ProposalListComponent,canActivate: [AuthGuard]},
  {path:"create_proposal", component: ProposalCreateComponent,canActivate: [AuthGuard]},
  {path:"", component: LoginComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
