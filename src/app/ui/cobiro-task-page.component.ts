import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { PageRepositoryService } from '../domain/page-repository.service';

@Component({
  selector: 'app-cobiro-task',
  templateUrl: './cobiro-task-page.component.html',
  styleUrls: ['./cobiro-task-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CobiroTaskPageComponent implements OnInit, OnDestroy {

  pageData = [];
  private readonly unsubscribe = new Subject<void>();

  constructor(public pageRepository: PageRepositoryService, private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.pageRepository.getPage()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(page => {
        this.pageData = page.data;
        this.changeDetectorRef.detectChanges();
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
