import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NgxFileDropModule } from 'ngx-file-drop';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent,NgxFileDropModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title:string='';
  ngOnInit(){
    this.title=localStorage.getItem('userName')||'';
  }
  onFileDrop(e:any){

  }
  onFileOver(e:any){

  }
  triggerFileInput(){

  }
  onFileLeave(e:any){
    
  }
}
