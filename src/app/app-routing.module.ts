import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from 'src/usermodule/user-list/user-list.component';
import { UserComponent } from 'src/usermodule/user/user.component';

const routes: Routes = [
  {

    path:'reg',component:UserComponent,children:[{path:'child1',component:UserListComponent}]


},


{path:'list',component:UserListComponent},{path:'**',component:UserComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
