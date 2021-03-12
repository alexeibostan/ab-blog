import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Post } from 'src/app/core/models/post';
import { PostService } from 'src/app/core/post.service';

@Component({
  selector: 'ab-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  post$!: Observable<Post>;

  constructor(
    private title: Title,
    private route: ActivatedRoute,
    private router: Router, 
    private postService: PostService) { }

  ngOnInit(): void {
    this.title.setTitle('AB - Post');
    this.post$ = this.route.paramMap.pipe(
      switchMap((paramMap: ParamMap) => {
        const id = Number(paramMap.get('id'));
        if(!id){
          this.router.navigateByUrl('not-found');
          return EMPTY;
        } else {
          return this.postService.getPost(id)
        }
      })
    )
  }

}
