import { NgxPayPalModule } from 'ngx-paypal';
import { AuthGuard } from './services/auth.guard';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FacebookLoginProvider,GoogleLoginProvider, SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { ShopComponent } from './shop/shop.component';
import { ProductsComponent } from './shop/products/products.component';
import { SingleProductComponent } from './shop/single-product/single-product.component';
import { CartComponent } from './shop/cart/cart.component';
import { ServComponent } from './serv/serv.component';
import { EditComponent} from './auth/edit/edit.component';
import { ButtonClicktopayComponent } from './shop/button-clicktopay/button-clicktopay.component';
import { ButtonSobflousComponent } from './shop/button-sobflous/button-sobflous.component';
import { RouterModule, Routes } from '@angular/router';
import { ModalAddToCartComponent } from './shop/modal-add-to-cart/modal-add-to-cart.component';
import { ModalQuickViewComponent } from './shop/modal-quick-view/modal-quick-view.component';
import { CategoryComponent } from './category/category.component';
import { CheckoutComponent } from './shop/checkout/checkout.component';
import { ButtonPaypalComponent } from './shop/button-paypal/button-paypal.component';
import { SliderComponent } from './shop/slider/slider.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TestdriveComponent } from './testdrive/testdrive.component';
import { NgxCaptchaModule } from 'ngx-captcha';









export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}




const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'shop', component: ShopComponent},
  {path:'cart', component: CartComponent},
  {path:'single-product/:id', component: SingleProductComponent},
  {path:'category/:id', component: CategoryComponent},
  {path:'contact', component: ContactComponent},
  {path:'checkout',canActivate: [AuthGuard], component: CheckoutComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'notFound', component: NotFoundComponent},
  {path:'', component: HomeComponent},
  {path:'testdrive', component: TestdriveComponent},
  {path:'serv',component :ServComponent},
  {path:'profile',component :ProfileComponent},
  {path:'edit',component :EditComponent},
  {path:'sobflous',component :ButtonSobflousComponent},
  { path: '**', redirectTo: 'notFound', pathMatch: 'full'  }
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    ShopComponent,
    ProductsComponent,
    SingleProductComponent,
    CartComponent,
    ModalAddToCartComponent,
    ModalQuickViewComponent,
    CategoryComponent,
    CheckoutComponent,
    ButtonPaypalComponent,
    SliderComponent,
    ServComponent,
    ButtonClicktopayComponent,
    ButtonSobflousComponent,
    ProfileComponent,
    EditComponent,
    TestdriveComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SocialLoginModule,
    NgxPayPalModule,
    SocialLoginModule,
    NgxCaptchaModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory:HttpLoaderFactory, 
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider(
              '1031617917699718'
            )
          },
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '325110986702-8usjidqo76ifdu989i95blgn8n1lk09s.apps.googleusercontent.com'
            )
          }
          
        ]
      } as SocialAuthServiceConfig,
    }    
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
