import { Component, Input } from '@angular/core';
import { PageBlock } from '../../domain/page-models';
import { TeamPreviewAttributes } from '../../domain/team-preview-attributes';

@Component({
  selector: 'article[app-blocks]',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.scss']
})
export class BlocksComponent {

  @Input() block: PageBlock<TeamPreviewAttributes>;

}
