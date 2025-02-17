import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { authGuard } from './auth.guard';
import { AuthComponent } from './Auth/auth.component';

export const routes: Routes = [
    { path: '', component: AuthComponent },
    { path: 'home', component: HomeComponent, canActivate: [authGuard] }
];
