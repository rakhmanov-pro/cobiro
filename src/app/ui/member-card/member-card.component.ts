import { Component, Input } from '@angular/core';
import { PageBlockElement } from '../../domain/page-models';
import { MemberCardBlock } from '../../domain/team-preview-attributes';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.scss']
})
export class MemberCardComponent {
  @Input() memberCard: PageBlockElement<MemberCardBlock>;
}
