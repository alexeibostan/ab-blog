import { Component, OnInit } from '@angular/core';
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

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.posts$ = this.postService.getPosts();
  }

}
