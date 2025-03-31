import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
    {
        path:"login", component:LoginComponent
    },
    {
        path:"signup", component:SignupComponent
    },
    {
        path:"customer", loadComponent:()=>import('./customer/customer.component').then(m=>m.CustomerComponent)
    },
    {
        path:"admin", loadComponent:()=>import('./admin/admin.component').then(m=>m.AdminComponent)
    },
];
