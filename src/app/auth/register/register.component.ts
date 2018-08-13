import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {environment} from '../../../environments/environment';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    userObj: object = {};
  constructor( private http: Http) { }
  addUser= function(event){
    this.userObj = {
        'name': event.name,
        'cpf': event.cpf,
        'email': event.email,
        'celular': event.celular,
        'password': event.password,
        'tipousuario': '1',
    };
    this.http.post(`${environment.web_url}/user/auth/register`, this.userObj).subscribe((res: Response) => {
      console.log(res);
      this.route.navigate('login');
    });
  }
  ngOnInit(){
  }

}
