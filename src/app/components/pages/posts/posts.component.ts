import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { PostInfo } from '../../shared/post/post.component';

const initialPosts: PostInfo[] = [
  { userID: 1, id: 1, title: 'title', body: 'body' },
  { userID: 1, id: 1, title: 'title', body: 'body' },
  { userID: 1, id: 1, title: 'title', body: 'body' },
  { userID: 1, id: 1, title: 'title', body: 'body' },
  { userID: 1, id: 1, title: 'title', body: 'body' },
  { userID: 1, id: 1, title: 'title', body: 'body' },
  { userID: 1, id: 1, title: 'title', body: 'body' },
  { userID: 1, id: 1, title: 'title', body: 'body' },
  { userID: 1, id: 1, title: 'title', body: 'body' },
  { userID: 1, id: 1, title: 'title', body: 'body' },
  { userID: 1, id: 1, title: 'title', body: 'body' },
  { userID: 1, id: 1, title: 'title', body: 'body' },
  { userID: 1, id: 1, title: 'title', body: 'body' },
  { userID: 1, id: 1, title: 'title', body: 'body' },
  { userID: 1, id: 1, title: 'title', body: 'body' },
  { userID: 1, id: 1, title: 'title', body: 'body' },
  { userID: 1, id: 1, title: 'title', body: 'body' },
  { userID: 1, id: 1, title: 'title', body: 'body' },
  { userID: 1, id: 1, title: 'title', body: 'body' },
  { userID: 1, id: 1, title: 'title', body: 'body' },
  { userID: 1, id: 1, title: 'title', body: 'body' },
  { userID: 1, id: 1, title: 'title', body: 'body' },
  { userID: 1, id: 1, title: 'title', body: 'body' },
  { userID: 1, id: 1, title: 'title', body: 'body' },
];

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements AfterViewInit, OnInit {
  posts: PostInfo[] = initialPosts;
  displayedColumns: string[] = ['title', 'body'];
  dataSource = new MatTableDataSource<PostInfo>(initialPosts);

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
  }
}
