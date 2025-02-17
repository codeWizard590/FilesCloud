import { Component, computed, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { loginPayload } from '../Models/loginPayload';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
  providers:[AuthService]
})
export class AuthComponent {
  title = 'FilesCloud';
  loginData = { userame: '', password: '' };
  loginResponse:any;
  userData:loginPayload = { userName: 'Andhiman', hashPass: 'Ankit@6891' };
  loginForm! :FormGroup;
  signUpForm! :FormGroup;
  constructor(private _authService : AuthService , private fb:FormBuilder , private router : Router){}
  // using signals for maintaining local states ..
  authState = signal('SIGN UP');
  authPage = signal(false);

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: [''],
      hashPass: [''],
    });
    this.signUpForm = this.fb.group({
      userName: [''],
      hashPass: [''],
    });
  }

  onSubmit(pageState:any){
    console.log(pageState);
    if(pageState){
      // true page state means that the login page is available 
      this.logIn();
    }
    else{
      this.signUp();
    }
    // alert("y");
  }
  signUpPage(){
    const getAuthState = computed(() => this.authState().toUpperCase());
    if(getAuthState() == "SIGN UP"){
      this.authState.set("LOG IN");
      this.authPage.set(false);
    }
    else{
      this.authState.set("SIGN UP");
      this.authPage.set(true);
    }
    
  }

  logIn() {
    // You would typically make an API call to authenticate the user here.
    console.log('Username:', this.userData.userName);
    console.log('Password:', this.userData.hashPass);
    this.userData={
      userName: this.loginForm.get('userName')?.value,
      hashPass: this.loginForm.get('hashPass')?.value
    }
    this.loginResponse=this._authService.authoriseLogin(this.userData).
    subscribe((res: any) => {
      if(res.message=="Success") {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userName',res.name);
        this.navigateToDashboard();
        alert('Login Successful!');
      }
      else{
        alert('incorrect credentials');
      }
    });
    // For now, just show a success message.
    
  }

  navigateToDashboard(){
    this.router.navigate(['home']);
  }

  signUp(){
    this.userData={
      userName: this.signUpForm.get('userName')?.value,
      hashPass: this.signUpForm.get('hashPass')?.value
    }
    this._authService.signUp(this.userData).
    subscribe((res: any) => {
      if(res.message=="User Added") {
        alert('Sign Up Successful!');
      }
      else{
        alert('incorrect credentials'); 
      }
    });
  }
}
