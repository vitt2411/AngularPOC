import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserMan } from 'src/model/user.mdoel';

@Injectable({
  providedIn: 'root'
})
export class UsersericeService {

  constructor(public http:HttpClient) { }

getUsersurl:string='http://localhost:8181/api/v1/userServiceManagement/users';
deleteurl:string='http://localhost:8181/api/v1/userServiceManagement/deleteuser';
updateurl:string='http://localhost:8181/api/v1/userServiceManagement/edituser';
getuserbyfirstName:string='http://localhost:8181/api/v1/userServiceManagement/getusers';
sortByDob:string='http://localhost:8181/api/v1/userServiceManagement/sortByDob';
sortByDoj:string='http://localhost:8181/api/v1/userServiceManagement/sortByDoj';
posturl:string='http://localhost:8181/api/v1/userServiceManagement/user';

buttonname:string="submit";
flag:boolean=false;
ishide:boolean=false;


user:UserMan={
  'dateOfBirth': '',
    'dateOfJoining': '',
    'emailID': '',
    'firstName': '',
    'flagDelete': 0,
    'id': 0,
    'lastName': '',
    'pinCode': 0
}


getData(){

return this.http.get(this.getUsersurl);

}

postUser(user:UserMan){
return this.http.post(this.posturl,user);
}

delteUser(user:UserMan){
return this.http.delete(this.deleteurl+"/"+user.id);

}

updateUSer(user:UserMan){
this.flag=true
return this.http.put(this.updateurl+"/"+user.id,user);
this.flag=false
}
getUserByname(name:string){

return this.http.get(this.getuserbyfirstName+"/"+name)
}

sortUserByDob(){
return this.http.get(this.sortByDob);
}

sortUserByDoj(){

  return this.http.get(this.sortByDoj);
  }
}
