import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  welcomeNote:string='welcome';

  ngOnInit(){
    this.gatherUserInfo();
  }

  gatherUserInfo(){
    if(localStorage.getItem('isLoggedIn')=="true"){
      let username=localStorage.getItem('userName') || ''
      this.welcomeNote=`Hello , Welcome ${username}`;
    }  
  }
  logOut(){
    if(localStorage.getItem('isLoggedIn')=="true"){
      localStorage.setItem('isLoggedIn',"false");
    }
  }
}
