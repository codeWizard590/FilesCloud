import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  imports: [],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  title = 'FilesCloud';
  loginData = { username: '', password: '' };

  onSubmit() {
    // You would typically make an API call to authenticate the user here.
    console.log('Username:', this.loginData.username);
    console.log('Password:', this.loginData.password);
    
    // For now, just show a success message.
    alert('Login Successful!');
  }
}
