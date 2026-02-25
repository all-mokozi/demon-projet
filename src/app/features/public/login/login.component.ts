import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
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
  errorMessage:string='';
  constructor(private securityService: SecurityService,private router:Router) { }
  onLogin(formCtrl:NgForm):void{
    if(formCtrl.invalid){
      this.errorMessage='veuillez remplir tous les champs correctement.';
      return;
    }
  
    const loginResult = this.securityService.login(this.userLogin);
    if(loginResult!=null){
      
      this.router.navigate(['/private/dashboard']);
    }else{
      alert('Login failed! Invalid email or password.');
    }

  
  }
 isFieldInvalid(fieldName:string,formCtrl:NgForm):boolean{
  const field = formCtrl.form.get(fieldName);
  return !!(field && field.invalid && (field.dirty || field.touched));
 }
}
