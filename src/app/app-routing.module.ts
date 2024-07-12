import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGaurd } from './Authgurd';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';

const routes: Routes = [
  {
    path:"",
    component:RegisterComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"footer",
    component:FooterComponent,
  },
  {
    path:"dashboard",
    component:DashboardComponent,canActivate:[AuthGaurd]
  },
  {
    path:"details",
    component:MovieDetailsComponent
  },
  {
    path:"payment",
    component:PaymentPageComponent
  },
  {
    path:"paymentSuccess",
    component:PaymentSuccessComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
 }
