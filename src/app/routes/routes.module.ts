import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CakeGalleryComponent } from '../components/cake-gallery/cake-gallery.component';
import { OrdersComponent } from '../components/orders/orders.component';
import { LoginComponent } from '../components/login/login.component';
import { SignUpComponent } from '../components/sign-up/sign-up.component';
import { AccountComponent } from '../components/account/account.component';

const ROUTES: Routes = [
  { path: 'cake-gallery', component: CakeGalleryComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'login', component: LoginComponent},
  { path: 'sign-up', component: SignUpComponent },
  { path: 'account', component: AccountComponent },
  { path: '**', component: CakeGalleryComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES, {useHash:true})
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}