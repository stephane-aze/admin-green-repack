import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CategoryCreateComponent } from './category-create/category-create.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProposalCreateComponent } from './proposal-create/proposal-create.component';
import { ProposalListComponent } from './proposal-list/proposal-list.component';
import { UserListComponent } from './user-list/user-list.component';


const routes: Routes = [
  {path:"dashboard",component: DashboardComponent},
  {path:"users",component: UserListComponent},
  {path:"categories",component: CategoryListComponent},
  {path:"create_category", component: CategoryCreateComponent},
  {path:"proposals", component: ProposalListComponent},
  {path:"create_proposal", component: ProposalCreateComponent},
  {path:"", component: LoginComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
