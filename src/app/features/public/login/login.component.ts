import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginRequest } from 'src/app/core/models/user.model';
import { SecurityService } from 'src/app/core/service/security.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userLogin:UserLoginRequest={
    email:'mohamed',
    password:''
  }
  constructor(private securityService: SecurityService,private router:Router) { }
  onLogin():void{
  
    const loginResult = this.securityService.login(this.userLogin);
    if(loginResult!=null){
      
      this.router.navigate(['/private/dashboard']);
    }else{
      alert('Login failed! Invalid email or password.');
    }

  
  }

}
