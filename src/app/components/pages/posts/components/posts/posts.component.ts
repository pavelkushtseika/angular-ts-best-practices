import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { map, Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { PostInfo } from '../post/post.component';
import { AppState } from '../../../../../types/app.state.interface';
import * as PostsActions from '../../store/posts.actions';
import { errorSelector, isLoadingSelector, postsSelector } from '../../store/posts.selectors';

const initialPosts: PostInfo[] = [];

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements AfterViewInit, OnInit {
  posts: PostInfo[] = initialPosts;
  displayedColumns: string[] = ['title', 'body'];
  dataSource = new MatTableDataSource<PostInfo>(initialPosts);

  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  posts$: Observable<PostInfo[]>;

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  constructor(private store: Store<AppState>) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.posts$ = this.store.pipe(select(postsSelector));

    this.posts$.subscribe(posts => this.dataSource.data = posts);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.store.dispatch(PostsActions.getPosts());
  }
}
