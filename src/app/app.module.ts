import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminModule } from './admin.module';


@NgModule({
  imports:      [ BrowserModule, FormsModule, AdminModule,AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, HeaderComponent, FooterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
