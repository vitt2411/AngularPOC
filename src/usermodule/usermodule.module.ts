import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RegComponent } from './reg/reg.component';



@NgModule({
  declarations: [

    RegComponent
  ],
  imports: [
    CommonModule,HttpClientModule,FormsModule,RouterModule
  ]
})
export class UsermoduleModule { }
