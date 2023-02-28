import { Component, Input } from '@angular/core';
import { PostInfo } from '../../types/post.interface';

const samplePost: PostInfo = {
  userId: 1,
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
