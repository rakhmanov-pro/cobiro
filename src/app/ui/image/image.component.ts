import { Component, HostBinding, Input } from '@angular/core';
import { Image } from '../../domain/team-preview-attributes';

@Component({
  selector: 'img[app-image]',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent {

  @Input() image: Image;

  @HostBinding('[attr.src]') get getImageSrc(): string {
    return this.image.w200;
  }

}
