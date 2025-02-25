import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { CategoryComponent } from './admin/category/category.component';
import { FormsModule } from '@angular/forms';
import { AdminMenuComponent } from './admin/admin-menu/admin-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainLayoutComponent,
    AdminLayoutComponent,
    AboutComponent,
    ContactComponent,
    MenuComponent,
    CategoryComponent,
    AdminMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi())  //http istekleri atarken araya girip farklı işlemleri ele almak için kullanılır
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
