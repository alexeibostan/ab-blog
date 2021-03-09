import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { HomeComponent } from './home/home/home.component';
import { PostDetailComponent } from './post/post-detail/post-detail.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
},{
  path: 'home',
  component: HomeComponent
},{
  path: 'post/:id',
  component: PostDetailComponent
},{
  path: '**',
  component: NotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
