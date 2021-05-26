import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserMan } from 'src/model/user.mdoel';

import { UsersericeService } from 'src/service/userserice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
user!:UserMan[];
msg!:string;
flag:boolean=false
  constructor(public ss:UsersericeService,public router:Router) { }


  ngOnInit(): void {}


  submitData(user:UserMan){
if(user.id!=null){
  this.flag=true
this.ss.postUser(user).subscribe();
this.msg="data add successfully";
this.ss.user=Object.assign({},null);

}else{

  this.ss.updateUSer(user).subscribe();
}

}

resetData(){
this.ss.user=Object.assign({},null);

}
reloadCurrentPage() {
  window.location.reload();
 }


 gotoList() {
  this.router.navigate(['/list']);
}

}
