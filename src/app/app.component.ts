import { Component, NgModule } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthComponent } from './Auth/auth.component';
import { HttpClient} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,ReactiveFormsModule],
  providers:[HttpClient],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FilesCloud';

  constructor(private router: Router) {}
  ngOnInit(){
      if(localStorage.getItem('isLoggedIn')=="true"){
          this.router.navigate(['home']);
      }
      else{
        this.router.navigate(['']);
      }
  }
}
