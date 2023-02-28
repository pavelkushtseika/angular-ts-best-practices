import { Component, Input } from '@angular/core';

export interface PostInfo {
  userID: number,
  id: number,
  title: string,
  body: string
}

const samplePost: PostInfo = {
  userID: 1,
  id: 1,
  title: 'title',
  body: 'body'
};

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input() post: PostInfo = samplePost;
}
