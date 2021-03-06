import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from '../../core/models/post';
import { PostService } from '../../core/post.service';

@Component({
  selector: 'ab-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts$!: Observable<Post[]>;

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit(): void {
    this.posts$ = this.postService.getPosts();
  }

  onSelectedPost(id: number) {
    this.router.navigateByUrl(`/post/${id}`);
  }

}
