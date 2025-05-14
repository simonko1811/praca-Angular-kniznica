import { Component, inject } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  user={
    username:'',
    password:''
  };
  storedUser={
    username:'admin',
    password:'heslo',
  };

  loginValid:boolean=true;

  router=inject(Router);

  validateLogin(email:string,password:string):boolean{
    return email===this.storedUser.username && password===this.storedUser.password;
  }

  onSubmit() {
    if(this.validateLogin(this.user.username,this.user.password)){
      localStorage.setItem('loggedInUser',JSON.stringify(this.user.username));
      this.loginValid=true;
      this.router.navigate(['/books']);
    }else{
      // alert('Incorrect email or password');
      this.loginValid=false;
    }
  }
}
