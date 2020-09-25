import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from '../components/menu/menu.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    // MenuComponent
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    //  MenuComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
