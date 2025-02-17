import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private apiUrl:string;
  constructor() { 
    this.apiUrl="https://localhost:7084";
  }
  getSettings():string{
    return this.apiUrl;
  }
}
