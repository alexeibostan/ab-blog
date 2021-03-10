import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Post } from '../../core/models/post';

@Component({
  selector: 'ab-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsListComponent implements OnInit {

  @Input() posts: Post[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
