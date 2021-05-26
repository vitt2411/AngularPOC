import { Component, OnInit } from '@angular/core';
import { UserMan } from 'src/model/user.mdoel';

import { UsersericeService } from 'src/service/userserice.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users!:UserMan[];
  options!:string;
  firstname!:any;
  flag:boolean=false
  flag1:boolean=true
  select="select ";
  constructor(public s:UsersericeService) { }

  ngOnInit(): void {
this.s.getData().subscribe((data:any)=>{
this.users=data;

})


  }

  delteUser(user:UserMan){
this.s.delteUser(user).subscribe();
this.ngOnInit;

  }
updateUser(user:UserMan){

  this.s.buttonname="update";
  this.s.ishide=true;
  this.flag=true
  this.flag1=false
  this.s.user=Object.assign({},user);


}

findByname(){

  this.s.getUserByname(this.firstname).subscribe((data:any)=>{
    this.users=data;
  });
}

sortBY(){

switch(this.options){

case "doj":{
  console.log("in doj"+this.options)
  this.s.sortUserByDoj().subscribe((data:any)=>{
    this.users=data;
  });
  break;
}

case "dob":{
  console.log("in dob"+this.options)
  this.s.sortUserByDob().subscribe((data:any)=>{
    this.users=data;
  });
  break;
}

}


}


submitData(user:UserMan){
  if(user.id!=null){
    console.log("in if block"+user)
    this.flag=true
    this.flag1=false
  this.s.postUser(user).subscribe();
  this.flag=false
    this.flag1=true
 this.ngOnInit;

  }else{
    console.log("in else block"+user)
    this.flag=true
    this.flag1=false
    this.s.updateUSer(user).subscribe();
    this.flag=false
    this.flag1=true

  }

  }
  reloadCurrentPage() {
    window.location.reload();
   }

  resetData(){
  this.s.user=Object.assign({},null);

  }



}
