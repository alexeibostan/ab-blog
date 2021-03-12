import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable, throwError } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Post } from './models/post';
import { User } from './models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private router: Router, private httpClient: HttpClient) { }

  getPosts(): Observable<Post[]>{
    const url = `${environment.baseApiUrl}/posts`;
    return this.httpClient.get<Post[]>(url)
    .pipe(
      switchMap((posts: Post[]) => forkJoin(posts.map(post => this.getPostAuthor(post)))),
      tap(result => console.log('getPosts', result)),
      catchError(err => this.handleError(err))
    );
  }

  getPost(postId: number): Observable<Post>{
    const url = `${environment.baseApiUrl}/posts/${postId}`;
    return this.httpClient.get<Post>(url)
    .pipe(
      switchMap(post => this.getPostAuthor(post)),
      catchError(err => this.handleError(err))
    )
  }

  private getPostAuthor(post: Post): Observable<Post> {
    const url = `${environment.baseApiUrl}/users/${post.authorId}`
    return this.httpClient.get<User>(url).pipe(
      map((author: User) => ({...post, author})),
      catchError(err => this.handleError(err))
    )
  }

  private handleError(err: any): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${ err.body ? err.body.error : ''}`;
      if(err.status === 404) { this.router.navigateByUrl('not-found') }
    }
    console.error(err);
    return throwError(errorMessage);
  }
  
}
