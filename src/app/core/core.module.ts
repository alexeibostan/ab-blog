import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    FooterComponent, 
    HeaderComponent, 
    SearchComponent, 
    CategoriesListComponent, NotFoundComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    FooterComponent, 
    HeaderComponent, 
    SearchComponent, 
    CategoriesListComponent
  ]
})
export class CoreModule { }
