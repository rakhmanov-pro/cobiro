import { Observable } from 'rxjs';
import { Page } from './page-models';

export abstract class PageRepositoryService {
  abstract getPage(): Observable<Page>;
}
