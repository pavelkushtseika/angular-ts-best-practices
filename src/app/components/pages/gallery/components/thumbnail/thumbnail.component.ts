import { Component, Input } from '@angular/core';

import { ImageInfo } from '../../types/image.interface';

const sampleImage: ImageInfo = {
  albumId: 1,
  id: 1,
  title: "",
  url: "",
  thumbnailUrl: ""
};

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss']
})
export class ThumbnailComponent {
  @Input() image: ImageInfo = sampleImage;
}
