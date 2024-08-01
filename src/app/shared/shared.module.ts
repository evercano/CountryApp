import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { SearchboxComponent } from './components/searchbox/searchbox.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';



@NgModule({
  declarations: [
    AboutPageComponent,
    ContactPageComponent,
    HomePageComponent,
    SearchboxComponent,
    SidebarComponent,
    LoadingSpinnerComponent,
  ],
  imports: [    
    CommonModule,   
    RouterModule,    
  ],
  exports: [
    AboutPageComponent,
    ContactPageComponent,
    HomePageComponent,    
    LoadingSpinnerComponent,
    SearchboxComponent,
    SidebarComponent,
  ]
})
export class SharedModule { }
