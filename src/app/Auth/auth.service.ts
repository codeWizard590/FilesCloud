import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SettingsService } from '../Shared/Settings/settings.service';
import { loginPayload } from '../Models/loginPayload';
import { signUpPayload } from '../Models/signUpPayload';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http : HttpClient,private _settings:SettingsService) { }

  authoriseLogin(user:loginPayload){
    return this._http.post(`${this._settings.getSettings()}/api/User/login`,user);
  }

  signUp(user:signUpPayload){
    return this._http.post(`${this._settings.getSettings()}/api/User/register`,user);
  }
}
