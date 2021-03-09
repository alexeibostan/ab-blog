import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home/home.component';
import { PostsListComponent } from './home/posts-list/posts-list.component';
import { PostDetailComponent } from './post/post-detail/post-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostsListComponent,
    PostDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
